export default function hasValuesFromArray(set, array) {
  if (!Array.isArray(array)) {
    throw new TypeError('array must be an Array');
  }

  if (Object.prototype.toString.call(set) !== '[object Set]') {
    throw new TypeError('set must be a Set');
  }

  return array.every((element) => set.has(element));
}
