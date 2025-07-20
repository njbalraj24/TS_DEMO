//Input: [10, 15, 3, 7], k = 17 → Output: true

function hasPairWithSum(arr: number[], target: number): boolean {
    let seen = new Set<number>();
    for (let num of arr) 
        {
        if (seen.has(target - num)) 
        return true;
        seen.add(num);
        }
    return false;
}
console.log(hasPairWithSum([10, 15, 3, 7], 17)); // true

/* 
How It Works
Let’s go step-by-step through the input [10, 15, 3, 7], with k = 17.
Initialize: seen = {} (empty set)
Iteration 1: num = 10
Check: Is 17 - 10 = 7 in seen? → No
Add 10 to seen → seen = {10}
Iteration 2: num = 15
Check: Is 17 - 15 = 2 in seen? → No
Add 15 to seen → seen = {10, 15}
Iteration 3: num = 3
Check: Is 17 - 3 = 14 in seen? → No
Add 3 to seen → seen = {3, 10, 15}
Iteration 4: num = 7
Check: Is 17 - 7 = 10 in seen? → ✅ Yes!
Return true
*/