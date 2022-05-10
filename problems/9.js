/**
 * Problem 9: Custom Sorting
 *
 * Given a list students, return the names of students who have a grade above 90 in alphabetical order.
 * Use the .map, .filter, and .sort functions.
 *
 * @example [{name: "Chase", grade: 89}, {name: "Raman", grade: 92}, {name: "Peter", grade: 100}] -> ["Peter", "Raman"]
*/
function problem(students) {
  const gradeA = students.filter(function(student) {
    return student.grade > 90;
  })

  const gradeAnames = gradeA.map(function(student) {
    return student.name;
  })
    return gradeAnames.sort();
}

const tests = [
    [[{name: "Chase", grade: 89}, {name: "Raman", grade: 92}, {name: "Peter", grade: 100}], ["Peter", "Raman"]],
    [[{name: "Peter", grade: 92}, {name: "Gillman", grade: 70}, {name: "Pattis", grade: 100}], ["Pattis", "Peter"]],
    [[{name: "Chase", grade: 89}], []]
]

module.exports = {problem, tests};
