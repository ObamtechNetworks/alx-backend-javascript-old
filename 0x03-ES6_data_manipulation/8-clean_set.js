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
  // An empty array to store the cleaned values
  const cleanedValues = [];

  // Iterate over each value in the set
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      // extract the substric into the array and also remove the rest part
      cleanedValues.push(value.slice(startString.length));
    }
  });

  // Join the cleaned values with '-' separator and return as a single string
  return cleanedValues.join('-');
}
