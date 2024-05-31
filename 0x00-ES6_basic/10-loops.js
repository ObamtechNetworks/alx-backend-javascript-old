export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const idx of array) {
    // eslint-disable-next-line no-param-reassign
    array[i] = appendString + idx;
    i += 1;
  }
  return array;
}
