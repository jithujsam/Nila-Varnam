/** Page copy. Source of truth: docs/content/CONTENT_AND_SEO.md. Facts not yet confirmed by the owner are omitted. */
import { site } from './site';

/** Set true only after the owner approves publishing the approximate monthly capacity (CONTENT_INPUTS_REQUIRED #13). */
export const SHOW_CAPACITY = false;
const capacity = SHOW_CAPACITY ? ' The studio completes roughly 5–10 paintings a month, depending on size, complexity and the mix of work.' : '';

export const artistLabel = site.artistName ?? 'The artist';

export const commissionSteps = [
  { title: 'Send a brief', text: 'Tell us what you need, the space or occasion, and the size you have in mind.' },
  { title: 'Receive a proposal', text: 'We confirm what is possible, the medium, the schedule and the cost.' },
  { title: 'The artist paints', text: 'Work is scheduled with the artist, and you stay in touch through one point of contact.' },
  { title: 'Delivery', text: 'We discuss packing and delivery for your project before it ships.' },
];

export const faqHospitality = [
  { q: 'Do you have hotel installations to show?', a: 'The gallery currently shows portrait and devotional paintings. Work for hospitality spaces is made to commission, so we start with your brief.' },
  { q: 'Can you paint a series for one property?', a: 'We can discuss a matched series. The number of works depends on size and schedule.' },
  { q: 'What sizes can you paint?', a: 'Sizes are agreed per project. Tell us the wall and we will advise.' },
  { q: 'What mediums are available?', a: 'Watercolour, oil and acrylic.' },
  { q: 'How long does a commission take?', a: 'It depends on size, medium and the number of works. We give a schedule in the proposal.' },
  { q: 'Do you ship?', a: 'We discuss packing and delivery with you before a project is dispatched.' },
  { q: 'How much does it cost?', a: 'Cost depends on size, medium, complexity and quantity. We give a written proposal.' },
];
export const faqGifting = [
  { q: 'What quantity can you handle?', a: `This is a small studio, so we suit a small number of meaningful gifts rather than large volumes. Tell us the quantity and the date and we will say plainly what fits.${capacity}` },
  { q: 'Can you paint from a photograph?', a: 'Yes. Portraits are commonly painted from a photograph you provide.' },
  { q: 'Can the gift be framed or packed?', a: 'We discuss framing and packing for your project.' },
  { q: 'How are recipients’ details handled?', a: 'We use references only for the commission and agree how they are handled. See the privacy page.' },
  { q: 'What is the lead time?', a: 'We give a schedule in the proposal.' },
];
export const faqCommissions = [
  { q: 'Which medium should I choose?', a: 'We will advise based on subject, size and where the painting will hang.' },
  { q: 'What photograph works best?', a: 'A sharp, well-lit, high-resolution photograph. Send the largest original you have.' },
  { q: 'Can I see progress?', a: 'We can agree check-ins as part of the proposal.' },
  { q: 'Can I request changes?', a: 'Revision terms are agreed in the proposal.' },
  { q: 'Do you paint religious subjects?', a: 'Yes. Devotional and religious paintings are among the subjects the artist paints.' },
  { q: 'Can you paint other subjects?', a: 'Other subjects can be discussed and are confirmed with the artist.' },
];
export const faqHome = [
  { q: 'Where is the studio?', a: 'In Kerala. We work with clients across India.' },
  { q: 'Who paints the work?', a: 'One self-taught artist with about 30 years of practice paints every commission.' },
  { q: 'How do I start?', a: 'Send a short brief through the form and we will reply with next steps.' },
];
export { capacity };
