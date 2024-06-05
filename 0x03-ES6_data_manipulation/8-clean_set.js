export default function cleanSet(set, startString) {
// Check if startString is a string and Set is a Set
  if (typeof startString !== 'string' || !(set instanceof Set) || startString.length === 0) {
    // If not, return an empty string
    return '';
  }

  // Create an empty array to store the cleaned values
  const cleanedValues = [];

  // Iterate over each value in the set
  set.forEach((value) => {
    // Check if the value is a string and starts with the specified startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // If it does, extract substring after the startString and push to the cleanedValues array
      cleanedValues.push(value.slice(startString.length));
    }
  });

  // Check if any values were cleaned and joined
  if (cleanedValues.length === 0) {
    // If not, return an empty string
    return '';
  }

  // Join the cleaned values with "-" separator and return as a single string
  return cleanedValues.join('-');
}
