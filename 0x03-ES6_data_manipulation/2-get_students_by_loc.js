function getStudentsByLocation(array, city) {
  if (typeof city !== 'string') {
    throw new TypeError('City must be a String');
  }

  if (!Array.isArray(array) || array.every((el) => typeof el !== 'object' && el === null)) {
    return [];
  }

  return array.filter((obj) => obj.location === city);
}

export default getStudentsByLocation;
