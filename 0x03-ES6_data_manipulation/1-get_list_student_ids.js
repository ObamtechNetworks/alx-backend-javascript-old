function getListStudentIds(array) {
  if (!Array.isArray(array) || array.every((el) => typeof el !== 'object' && el === null)) {
    return [];
  }

  return array.map((obj) => obj.id);
}

export default getListStudentIds;
