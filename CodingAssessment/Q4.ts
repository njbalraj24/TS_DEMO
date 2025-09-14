/* A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.
You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.
The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.
For example, you are given integer X = 5 and array A such that:
`A[0] = 1 A[1] = 3 A[2] = 1 A[3] = 4 A[4] = 2 A[5] = 3 A[6] = 5 A[7] = 4`
`content_copy`
In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.
Write a function:
`function solution(X: number, A: number[]): number;`
`content_copy`
that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.
If the frog is never able to jump to the other side of the river, the function should return −1.
For example, given X = 5 and array A such that:
`A[0] = 1 A[1] = 3 A[2] = 1 A[3] = 4 A[4] = 2 A[5] = 3 A[6] = 5 A[7] = 4`
`content_copy`
the function should return 6, as explained above.
Write an **efficient** algorithm for the following assumptions:
N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X]. */

function solution4(X: number, A: number[]): number {
    const positions = new Set<number>();
    
    for (let i = 0; i < A.length; i++) {
        positions.add(A[i]);
        // When all positions from 1 to X are covered, return current time
        if (positions.size === X) {
            return i;
        }
    }
    
    // If not all positions covered after all leaves fell
    return -1;
}

/* Explanation
We want to find the earliest time i when all positions from 1 to X have at least one leaf fallen on them.
The Set positions keeps track of unique positions covered by leaves so far.
Iterate through array A:
For each time i, add the leaf position A[i] to the set.
When the size of the set equals X, it means all positions are covered.
Return the index i immediately since this is the earliest time the frog can jump.
If the loop completes and all positions are never covered, return -1. 

X = 5
A = [1, 3, 1, 4, 2, 3, 5, 4]

At i=6 (7th second), the leaf falls on position 5, covering all positions {1,2,3,4,5} for the first time.
The function returns 6 as the earliest time.

*/