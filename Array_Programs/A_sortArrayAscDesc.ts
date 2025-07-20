function sortArrayAsc(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
}

function sortArrayDesc(arr: number[]): number[] {
    return arr.sort((a, b) => b - a);
}

// Test Cases
let nums = [5, 1, 4, 2, 3];

console.log("Ascending:", sortArrayAsc([...nums]));  // [1, 2, 3, 4, 5]
console.log("Descending:", sortArrayDesc([...nums])); // [5, 4, 3, 2, 1]

/* 
Ascending Sort Logic
arr.sort((a, b) => a - b);
For each pair a, b, it:
 Returns a negative number if a < b (so a comes before b)
 Returns 0 if equal
 Returns positive if a > b (so a comes after b)

a = 2, b = 5 → a - b = -3 → 2 comes before 5

Descending Sort Logic
arr.sort((a, b) => b - a);
Flip the order:
 Returns negative when b < a → b comes before a → descending.

a = 2, b = 5 → b - a = 3 → 5 comes before 2

Test Cases Output:
nums = [5, 1, 4, 2, 3]

Ascending:  [1, 2, 3, 4, 5]
Descending: [5, 4, 3, 2, 1]
*/