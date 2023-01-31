/**
 *
 * An integer N is given, representing the area of some rectangle.
 * The area of a rectangle whose sides are of length A and B is A * B, and the perimeter is 2 * (A + B).
 *
 * The goal is to find the minimal perimeter of any rectangle whose area equals N. The sides of this rectangle should be only integers.
 *
 * For example, given integer N = 30, rectangles of area 30 are:
 *
 * (1, 30), with a perimeter of 62,
 * (2, 15), with a perimeter of 34,
 * (3, 10), with a perimeter of 26,
 * (5, 6), with a perimeter of 22.
 *
 * Write a function:
 *
 * function solution(N: number): number;
 * that, given an integer N, returns the minimal perimeter of any rectangle whose area is exactly equal to N.
 *
 * For example, given an integer N = 30, the function should return 22, as explained above.
 *
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [1..1,000,000,000].
 *
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution17(N: number): number {
  // Implement your solution here

  if (N === 1) {
    return 4;
  }

  const perimeters: number[] = [];

  for (let i = 1; i <= N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (i * j === N) {
        perimeters.push(2 * (i + j));
      }
    }
  }

  return Math.min.apply(null, perimeters);
}

console.log(solution17(101))