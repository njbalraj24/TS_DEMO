function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
    return [...arr1, ...arr2];
    //return arr1.concat(arr2);
}

// Test
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

console.log("Merged:", mergeArrays(a1, a2)); // [1, 2, 3, 4, 5, 6]

/* 
Explanation:
...arr1 and ...arr2 spread the contents into a new array.
It’s the cleanest, immutable way to merge arrays.

return arr1.concat(arr2);
 concat() returns a new array without modifying the originals.
*/