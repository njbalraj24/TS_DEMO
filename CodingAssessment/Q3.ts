/* A small frog wants to get to the other side of the road. The frog is currently located at position X and
 wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.
Count the minimal number of jumps that the small frog must perform to reach its target.
Write a function:
function solution(X: number, Y: number, D: number): number;
that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position 
equal to or greater than Y.
For example, given:
X = 10 Y = 85 D = 30
the function should return 3, because the frog will be positioned as follows:
after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Write an efficient algorithm for the following assumptions:
X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y. */
function solution2(X: number, Y: number, D: number): number {
    // Distance the frog needs to cover
    const distance = Y - X;
    
    // Calculate minimum jumps needed
    // Use Math.ceil to round up because even if the last jump overshoots, it still counts
    return Math.ceil(distance / D);
}
console.log(solution2(10,85,30)); //2.5~3 [Answer is 3]

/* Example
Given:
X = 10
Y = 85
D = 30

Calculations:
Distance to cover: 85 - 10 = 75
Number of jumps: Math.ceil(75 / 30) = Math.ceil(2.5) = 3
So, the frog needs 3 jumps. 

Math.ceil(distance / D) rounds up the division result to the nearest whole number, ensuring the frog covers
 or surpasses Y.
*/
