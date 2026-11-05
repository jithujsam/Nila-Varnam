import { readFileSync } from 'node:fs';
const cfg = JSON.parse(readFileSync(new URL('../launch.config.json', import.meta.url), 'utf8'));
export const stagingMode = cfg.stagingMode === true;
export const isProduction = !stagingMode && (process.env.VERCEL_ENV === 'production' || process.env.BUILD_TARGET === 'production');
