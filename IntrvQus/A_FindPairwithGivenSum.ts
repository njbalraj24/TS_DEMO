//Input: [10, 15, 3, 7], k = 17 → Output: true

function hasPairWithSum(arr: number[], target: number): boolean {
    let seen = new Set<number>();
    for (let num of arr) {
        if (seen.has(target - num)) return true;
        seen.add(num);
    }
    return false;
}
console.log(hasPairWithSum([10, 15, 3, 7], 17)); // true