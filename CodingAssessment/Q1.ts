/* 
Write a function:
function solution(A: number[]): number;
given an array A of N integers, returns the smallest positive integer (greater than 0) that does not 
occur in A.
For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.
Given A = [−1, −3], the function should return 1.
Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/
function solution(A: number[]): number {
    const seen = new Set<number>();
    
    // Add only positive numbers to set
    for (let num of A) {
        if (num > 0) {
            seen.add(num);
        }
    }

    // The first missing positive integer will be between 1 and N+1
    for (let i = 1; i <= A.length + 1; i++) {
        if (!seen.has(i)) {
            return i;
        }
    }
    return 1; // Fallback, though loop already covers it
}

// Test cases
console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3])); // 1
console.log(solution([2])); // 1

/* Why This Works
We only care about positive numbers within the possible range.
The smallest missing positive integer can be at most N + 1.
This gives O(N) time complexity and O(N) space complexity.
Works for all edge cases. */