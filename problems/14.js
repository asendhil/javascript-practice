/**
 * Problem 14: Majority Element
 *
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 *
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
  numbers.sort((a, b) => a - b);
  if (numbers.length % 2 == 0) {
    return numbers[numbers.length / 2];
  } else{
    return numbers[(numbers.length - 1) / 2];
  }
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};
