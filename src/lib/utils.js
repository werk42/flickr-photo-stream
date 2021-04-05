export const trimString = (string, length) => {
  return string.slice(0, length) + (string.length > length ? '...' : '');
}