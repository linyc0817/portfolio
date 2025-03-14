export function getImagePath(path: string) {
  // Check if we're in production environment
  const prefix = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  const finalPath = `${prefix}${path}`;
  
  return finalPath;
}
