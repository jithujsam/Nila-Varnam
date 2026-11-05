/** Shared copy. Source of truth: docs/content/CONTENT_AND_SEO.md. Facts not yet confirmed by the owner are omitted, never invented. */
import { site } from './site';

/** Set true only after the owner approves publishing the approximate monthly capacity (CONTENT_INPUTS_REQUIRED #13). */
export const SHOW_CAPACITY = false;
export const capacity = SHOW_CAPACITY ? ' The studio completes roughly 5–10 paintings a month, depending on size, complexity and the mix of work.' : '';
export const artistLabel = site.artistName ?? 'The artist';

export const stages = [
  { title: 'Brief', text: 'You tell us about the space or occasion, the size you have in mind and the date.' },
  { title: 'Conversation', text: 'We reply personally, ask what is missing and confirm with the artist what is possible.' },
  { title: 'Proposal', text: 'A written proposal sets out subject, medium, size, schedule and cost.' },
  { title: 'Painting', text: 'The artist paints. We stay your single point of contact.' },
  { title: 'Delivery', text: 'Packing and delivery are agreed with you before anything ships.' },
];

export const sendHospitality = [
  'The property and its city, and the kind of space: lobby, restaurant, guest rooms, corridors, villa',
  'Photographs of the space, and wall sizes or plans if you have them',
  'Any palette, mood or design reference from your interior designer',
  'How many paintings, and whether they should read as a set',
  'The medium you prefer, or ask the studio to advise',
  'Your opening or handover date',
  'A budget range, if you have one',
  'Who coordinates installation, and where the work should be delivered',
];
export const sendGifting = [
  'The occasion, and who the gift is for (an individual, a team or a client group)',
  'How many gifts you are considering',
  'Whether a portrait is wanted, and if so a clear photograph of the person',
  'Any subject, colours or themes that matter to the recipient',
  'Size or format preferences, including whether framing is wanted',
  'The date the gifts are needed and where they should be delivered',
  'A budget range, if you have one',
];
export const sendPrivate = [
  'What you would like painted: a portrait, a devotional subject or something else',
  'A clear, high-resolution photograph if the painting is from a photograph',
  'The size and orientation you have in mind, and where it will hang',
  'The medium you prefer, or ask the studio to advise',
  'The date you need it by',
];

export const afterSubmit = [
  { title: 'We receive your brief', text: 'The enquiry is delivered to the studio and you see a confirmation on the page.' },
  { title: 'We reply personally', text: 'We read it, ask for anything missing and say plainly what is and is not possible.' },
  { title: 'You receive a proposal', text: 'Subject, medium, size, schedule, cost and delivery arrangements, in writing.' },
  { title: 'You approve, we begin', text: 'Once you approve the proposal and references, the artist starts painting.' },
];

export const faqHospitality = [
  { q: 'Do you have hotel installations to show?', a: 'The gallery shows botanical, portrait, devotional and harbour paintings, not hotel installations. Work for hospitality spaces is made to commission, so we start with your brief.' },
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
