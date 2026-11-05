import { site } from '../data/site';
const abs = (p: string) => new URL(p, site.url).toString();
export const crumbs = (items: [string, string][]) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })),
});
export const service = (name: string, path: string, description: string) => ({
  '@context': 'https://schema.org', '@type': 'Service', name, serviceType: name, description, url: abs(path),
  areaServed: 'India', provider: { '@type': 'Organization', name: site.name, url: site.url },
});
export const faqLd = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
});
