// Create and export a WeakMap instance
export const weakMap = new WeakMap();

// Create and export the queryAPI function
export function queryAPI(endpoint) {
  // Get the current count for the endpoint from the WeakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the count in the WeakMap
  weakMap.set(endpoint, count);

  // If the count is >= 5, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
