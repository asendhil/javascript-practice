/**
 * Problem 10: Strings
 *
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase.
 * If the string has odd length, the middle character should be lowercase.
 *
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
  if(str.length % 0 === 1) {
    const upper = str.slice(0, (str.length/2)-0.5).toUpperCase();
    const lower = str.slice((str.length/2)-0.5).toLowerCase();
    return upper + lower;
  } else {
      const upper = str.slice(0, (str.length/2)).toUpperCase();
      const lower = str.slice((str.length/2)).toLowerCase();
      return upper + lower;
  }
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};
