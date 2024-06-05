export default function cleanSet(set, startString) {
  if (Object.prototype.toString.call(set) !== '[object Set]') {
    throw new TypeError('set must be a Set');
  }

  if (typeof startString !== 'string') {
    throw new TypeError('startString must be a String');
  }

  if (startString.length === 0) {
    return '';
  }

  // filter out strings from the set that start with the startString
  const matchString = Array.from(set).filter((str) => str.startsWith(startString));
  // extract the rest of the strings after the startString
  const restOfStr = matchString.map((str) => str.slice(startString.length));

  // join the rest o fthe strings with the operator '-'
  const result = restOfStr.join('-');

  return result;
}
