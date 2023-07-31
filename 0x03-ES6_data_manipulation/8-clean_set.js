export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string') {
    return '';
  }
  const start = startString.length;
  const result = [];
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      result.push(element.slice(start));
    }
  });
  return result.join('-');
}
