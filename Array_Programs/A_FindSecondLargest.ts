//Find Second largest
function secondLargest(arr: number[]): number | null {
    let unique = [...new Set(arr)]; //Removes duplicate values from the array.
    if (unique.length < 2) return null;
    unique.sort((a, b) => b - a);
    return unique[1];
}
console.log(secondLargest([10, 5, 8, 12, 12])); // 10

/* (a, b) => b - a
The return value from the compare function tells .sort() what to do:
- If the result is negative, a comes before b.
- If the result is zero, a and b stay in the same position (relative order preserved).
- If the result is positive, b comes before a.

First comparison: 10 vs 5
b - a = 5 - 10 = -5 → result < 0 → 10 comes before 5

Next comparison: 10 vs 8
b - a = 8 - 10 = -2 → 10 stays before 8

12 vs others...
Eventually it becomes: [12, 10, 8, 5]

unique = [10, 5, 8, 12]
Comparisons done internally (simplified):
Compare 5 vs 10 → 10 comes first
Compare 8 vs 10 → 10 stays on top
Compare 8 vs 5 → 8 comes before 5
Compare 12 vs others → 12 becomes first
*/