function findUnion(arr1: number[], arr2: number[]): number[] {
    const unionSet = new Set([...arr1, ...arr2]); // Spread to merge both arrays
    return [...unionSet]; // Convert back to array
}

// Example Usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const union = findUnion(array1, array2);

console.log("Union:", union); // [1, 2, 3, 4, 5, 6, 7, 8]

/*  Union: All unique elements from both arrays.

const unionSet = new Set([...arr1, ...arr2]);
 Merge both arrays using the spread operator (...).
 Convert merged array into a set to keep only unique elements.

*/