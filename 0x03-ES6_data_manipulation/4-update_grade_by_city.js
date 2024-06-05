export default function updateStudentGradeByCity(studentArray, city, newGradesArray) {
  if (typeof city !== 'string') {
    throw new TypeError('City must be a String');
  }

  if (!Array.isArray(studentArray) || studentArray.every((el) => typeof el !== 'object' && el === null) || !Array.isArray(newGradesArray) || newGradesArray.every((el) => typeof el !== 'object' && el === null)) {
    return [];
  }

  const updatedStudents = studentArray.filter((obj) => obj.location === city);
  return updatedStudents.map((students) => {
    const studentGrade = newGradesArray.find((grade) => grade.studentId === students.id);
    return { ...students, grade: studentGrade ? studentGrade.grade : 'N/A' };
  });
}
