export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const result = [];

  set.forEach((item) => {
    if (item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  });

  return result.join('-');
}
