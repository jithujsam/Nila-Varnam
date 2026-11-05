/**
 * Framer-style motion for the exhibition, built on Motion (the vanilla sibling of Framer Motion).
 * Split-text headline reveals, image mask reveals, scroll-linked parallax, a cursor label over paintings,
 * soft magnetic buttons and a scroll-linked process line. Opacity/transform/clip-path only; nothing loops.
 * Off entirely under prefers-reduced-motion. Content stays visible without JS (see the head script and the 3.5 s failsafe).
 * Spec: docs/design/ANIMATION_SPEC.md (v2).
 */
import { animate, inView, scroll, stagger } from 'motion';

const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ease = [0.16, 1, 0.3, 1] as const;
const easeInOut = [0.77, 0, 0.18, 1] as const;

if (root.classList.contains('m-ready') && !reduce) init();

function splitWords(el: HTMLElement): HTMLElement[] {
  const words: HTMLElement[] = [];
  const walk = (node: Node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === Node.TEXT_NODE) {
        const parts = (n.textContent ?? '').split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(' ')); return; }
          const w = document.createElement('span'); w.className = 'w';
          const i = document.createElement('span'); i.className = 'wi'; i.textContent = p;
          w.appendChild(i); frag.appendChild(w); words.push(i);
        });
        n.parentNode!.replaceChild(frag, n);
      } else if (n.nodeType === Node.ELEMENT_NODE) walk(n);
    });
  };
  walk(el);
  el.classList.add('split-done');
  return words;
}

function init() {
  root.dataset.mOk = '1';
  const inEntrance = (el: Element) => !!el.closest('.entrance');

  // 1. Headlines: words rise out of a mask
  const heads = [...document.querySelectorAll<HTMLElement>('h1, h2, .statement')].filter((el) => !el.closest('dialog') && !el.closest('.sheet') && !el.closest('.footer'));
  heads.forEach((el) => {
    const words = splitWords(el);
    const run = (delay = 0) => animate(words, { transform: ['translateY(112%)', 'translateY(0%)'] }, { duration: 1.05, delay: stagger(0.055, { startDelay: delay }), ease });
    if (inEntrance(el)) run(0.12);
    else inView(el, () => { run(0); }, { amount: 0.4 });
  });

  // 2. Entrance: supporting text, lights, painting settles in
  document.querySelectorAll<HTMLElement>('.entrance .e-text .meta, .entrance .e-text .lead, .entrance .e-text .btn-row').forEach((el, i) => {
    el.classList.add('mm');
    animate(el, { opacity: [0, 1], transform: ['translateY(24px)', 'translateY(0px)'] }, { duration: 0.9, delay: 0.1 + [0, 0.55, 0.7][i] , ease });
  });
  document.querySelectorAll<HTMLElement>('.entrance .spot').forEach((el) => animate(el, { opacity: [0, 1] }, { duration: 1.8, delay: 0.25 }));
  document.querySelectorAll<HTMLElement>('.entrance .plate .frame img').forEach((img) => animate(img, { scale: [1.26, 1.1] }, { duration: 1.7, delay: 0.1, ease }));

  // 3. Everything else below the fold: fade and rise, once, staggered by sibling
  const sel = '.room .meta, .room .lead, .band, .stages li, .tlist li, .checklist li, .facts li, .faq > div, .chapter, .index li, .w-meta, .cols > *, .close .lead, .close .btn-row, .close .types, .room-head p';
  const groups = new Map<Element, number>();
  document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
    if (inEntrance(el) || el.closest('dialog') || el.closest('.sheet') || el.classList.contains('mm')) return;
    const parent = el.parentElement!; const i = groups.get(parent) ?? 0; groups.set(parent, i + 1);
    el.classList.add('mm');
    inView(el, () => { animate(el, { opacity: [0, 1], transform: ['translateY(28px)', 'translateY(0px)'] }, { duration: 0.95, delay: Math.min(i, 5) * 0.07, ease }); }, { amount: 0.15, margin: '0px 0px -8% 0px' });
  });

  // 4. Paintings: a mask lifts to reveal each work, the image settles, then drifts slowly as you scroll
  document.querySelectorAll<HTMLElement>('.plate .frame').forEach((frame) => {
    const img = frame.querySelector<HTMLElement>('img');
    if (!img) return;
    if (!inEntrance(frame)) {
      // observe the figure, not the clipped frame: an element clipped to nothing never intersects
      inView((frame.closest('.plate') as HTMLElement) ?? frame, () => {
        animate(frame, { clipPath: ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'] }, { duration: 1.15, ease: easeInOut }).finished.then(() => { frame.style.clipPath = 'none'; });
        animate(img, { scale: [1.24, 1.1] }, { duration: 1.5, ease });
      }, { amount: 0.18, margin: '0px 0px -6% 0px' });
    }
    scroll(animate(img, { transform: ['translateY(-4%)', 'translateY(4%)'] }, { ease: 'linear' }), { target: frame, offset: ['start end', 'end start'] });
  });

  // 5. Process: the top rule fills as you move through the stages
  document.querySelectorAll<HTMLElement>('.stages').forEach((st) => {
    const bar = document.createElement('span'); bar.className = 'prog'; bar.setAttribute('aria-hidden', 'true'); st.appendChild(bar);
    scroll(animate(bar, { transform: ['scaleX(0)', 'scaleX(1)'] }, { ease: 'linear' }), { target: st, offset: ['start 85%', 'end 55%'] });
  });

  // 6. Pointer niceties (fine pointers only): a cursor label over paintings, soft magnetic buttons
  if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const cur = document.createElement('div'); cur.className = 'cursor'; cur.setAttribute('aria-hidden', 'true'); cur.textContent = 'View';
    document.body.appendChild(cur); root.classList.add('m-cursor');
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0, on = false;
    const loop = () => { x += (tx - x) * 0.2; y += (ty - y) * 0.2; cur.style.transform = `translate3d(${x}px, ${y}px, 0)`; raf = on ? requestAnimationFrame(loop) : 0; };
    document.querySelectorAll<HTMLElement>('.plate-btn:not(.static)').forEach((b) => {
      b.addEventListener('pointerenter', (e) => { on = true; tx = x = e.clientX; ty = y = e.clientY; animate(cur, { opacity: 1, scale: 1 }, { type: 'spring', stiffness: 380, damping: 26 }); if (!raf) raf = requestAnimationFrame(loop); });
      b.addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; });
      b.addEventListener('pointerleave', () => { on = false; animate(cur, { opacity: 0, scale: 0.4 }, { duration: 0.25 }); });
    });
    document.querySelectorAll<HTMLElement>('.btn').forEach((b) => {
      b.addEventListener('pointermove', (e) => { const r = b.getBoundingClientRect(); b.style.translate = `${((e.clientX - r.left - r.width / 2) * 0.12).toFixed(1)}px ${((e.clientY - r.top - r.height / 2) * 0.22).toFixed(1)}px`; });
      b.addEventListener('pointerleave', () => { b.style.translate = '0 0'; });
    });
  }
}
