/**
 *
 * A prime is a positive integer X that has exactly two distinct divisors: 1 and X. The first few prime integers are 2, 3, 5, 7, 11 and 13.
 * A semiprime is a natural number that is the product of two (not necessarily distinct) prime numbers. The first few semiprimes are 4, 6, 9, 10, 14, 15, 21, 22, 25, 26.
 * You are given two non-empty arrays P and Q, each consisting of M integers. These arrays represent queries about the number of semiprimes within specified ranges.
 * Query K requires you to find the number of semiprimes within the range (P[K], Q[K]), where 1 ≤ P[K] ≤ Q[K] ≤ N.
 *
 * For example, consider an integer N = 26 and arrays P, Q such that:
 *  P[0] = 1    Q[0] = 26
 *  P[1] = 4    Q[1] = 10
 *  P[2] = 16   Q[2] = 20
 *
 * The number of semiprimes within each of these ranges is as follows:
 * (1, 26) is 10,
 * (4, 10) is 4,
 * (16, 20) is 0.
 *
 * Write a function:
 *
 * function solution(N: number, P: number[], Q: number[]): number[];
 *
 * that, given an integer N and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M elements specifying the consecutive answers to all the queries.
 *
 * For example, given an integer N = 26 and arrays P, Q such that:
 *  P[0] = 1    Q[0] = 26
 *  P[1] = 4    Q[1] = 10
 *  P[2] = 16   Q[2] = 20
 *
 * the function should return the values [10, 4, 0], as explained above.
 *
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [1..50,000];
 * M is an integer within the range [1..30,000];
 * each element of arrays P and Q is an integer within the range [1..N];
 *
 * P[i] ≤ Q[i].
 *
 *
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution19(N: number, P: number[], Q: number[]): number[] {
  // Implement your solution here

  // find prime numbers between 1 and N
  const prime: number[] = [];

  for (let i = 1; i <= N; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag === 0) {
      prime.push(i);
    }
  }

  let semiPrime: number[] = prime.map((x) => x ** 2);
  semiPrime = semiPrime.filter((x) => x <= N);

  for (let i = 0; i < prime.length; i++) {
    for (let j = i + 1; j < prime.length; j++) {
      if (
        prime[i] * prime[j] <= N &&
        !semiPrime.includes(prime[i] * prime[j])
      ) {
        semiPrime.push(prime[i] * prime[j]);
      }
    }
  }

  semiPrime.sort((a, b) => a - b);

  const countArr: number[] = [];

  for (let i = 0; i < P.length; i++) {
    const count = semiPrime.reduce((total, value) => {
      if (value >= P[i] && value <= Q[i]) {
        return total + 1;
      }
      return total;
    }, 0);

    countArr.push(count);
  }

  return countArr;
}

console.log(solution19(26, [1, 4, 16], [26, 10, 20]));
