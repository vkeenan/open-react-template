export function sortObjectsByDate(array, { key = "date" } = {}) {
  return array.sort((a, b) => new Date(b[key]) - new Date(a[key]));
}
