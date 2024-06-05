function getStudentIdsSum(students) {
  if (!Array.isArray(students) || students.every((el) => typeof el !== 'object' && el === null)) {
    return 0;
  }

  return students.reduce((accumulator, curVal) => accumulator + curVal.id, 0);
}

export default getStudentIdsSum;
