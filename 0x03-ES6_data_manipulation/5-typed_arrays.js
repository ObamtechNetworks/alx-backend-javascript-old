export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw new TypeError('Both Length or Position or Value must be a Number');
  }
  const buffer = new ArrayBuffer(length); // create a buffer of length bytes
  const bufferView = new DataView(buffer);

  try {
    // attempt to set value into postion
    bufferView.setInt8(position, value);
  } catch (error) {
    throw new Error('Position outside range');
  }
  return bufferView;
}
