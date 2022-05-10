/**
 * Problem 2: Mapping
 *
 * Given a list of names, create a list of strings that says "Hi {Name}".
 * Use the .map function.
 *
 * @example ["Chase", "Raman"] -> ["Hi Chase", "Hi Raman"]
 */
function problem(names) {
  const hiArr = names.map(function(item) {
    return "Hi " + item;
  })
    return hiArr;
}

const tests = [
    [["Chase", "Raman"], ["Hi Chase", "Hi Raman"]],
    [["Mars"], ["Hi Mars"]],
    [[], []]
]

module.exports = {problem, tests};
