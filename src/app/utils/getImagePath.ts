export function getImagePath(path: string) {
  // Check if we're in production environment
  const prefix = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  return `${prefix}${path}`;
}
