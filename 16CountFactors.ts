/**
 *
 * A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.
 * For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).
 *
 * Write a function:
 *
 * function solution(N: number): number;
 * that, given a positive integer N, returns the number of its factors.
 *
 * For example, given N = 24, the function should return 8, because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.
 *
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [1..2,147,483,647].
 *
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution16(N: number): number {
  // Implement your solution here

  const arr: number[] = [];

  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      arr.push(i);
    }
  }

  return arr.length;
}

console.log(solution16(24));
