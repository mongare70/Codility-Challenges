/**
 * Write a function:
 * function solution(A: number[]): number;
 * that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
 * 
 * For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
 * Given A = [1, 2, 3], the function should return 4.
 * Given A = [−1, −3], the function should return 1.
 * 
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [1..100,000];
 * each element of array A is an integer within the range [−1,000,000..1,000,000].
 *  
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution9(A: number[]): number {
    // Implement your solution here
    const N = A.length;

    // if every element within the array is less than 1 return 1
    if (A.every((x) => (x < 1))) {
        return 1;
    }

    // remove duplicates
    A = Array.from(new Set(A));

    // remove negatives
    A = A.filter((num) => (num > 0));

    // sort array
    A.sort((a,b) => (a - b));

    for (let i = 1; i <= N; i++) {
        if (A[i - 1] !== i) {
            return i;
        }
    }

    return N + 1;
}

console.log(solution9([-1, 1, 2, 3]));