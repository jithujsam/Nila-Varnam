/** Site-wide facts. Unknown owner facts are left undefined and render nothing (see docs/content/CONTENT_INPUTS_REQUIRED.md). */
const env = import.meta.env;

export const site = {
  name: 'NILA VARNAM',
  descriptor: 'Artist-led art studio, Kerala',
  url: (env.PUBLIC_SITE_URL as string | undefined) || 'http://localhost:4321',
  locale: 'en-IN',
  location: 'Based in Kerala, working with clients across India.',
  artistName: (env.PUBLIC_ARTIST_NAME as string | undefined) || undefined,
  email: (env.PUBLIC_CONTACT_EMAIL as string | undefined) || undefined,
  whatsapp: ((env.PUBLIC_WHATSAPP_NUMBER as string | undefined) || '').replace(/[^\d]/g, '') || undefined,
  phone: (env.PUBLIC_PHONE as string | undefined) || undefined,
};

export const nav = [
  { href: '/hospitality/', label: 'Hospitality' },
  { href: '/gifting/', label: 'Gifting' },
  { href: '/commissions/', label: 'Commissions' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/artist/', label: 'Artist' },
];

export const cta = { label: 'Request a proposal', href: '/contact/?type=general' };
