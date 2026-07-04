export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://women-five.vercel.app'
).replace(/\/$/, '');

export const SITE_NAME = '미즈 밸런스';

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
