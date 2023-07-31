export default function cleanSet(set) {
  if (!set || !(set instanceof Set)) return '';
  const str = [...set].map((x) => x.replace(/^bon/, '')).join('-');
  return str;
}
