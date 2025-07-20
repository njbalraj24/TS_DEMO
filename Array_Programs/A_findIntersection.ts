function findIntersection(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const intersection = [...set1].filter(item => set2.has(item));
    return intersection;
}
// Example Usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const intersection = findIntersection(array1, array2);

console.log("Intersection:", intersection); // [4, 5]

/* Intersection: Elements common in both arrays.

1. Set
 It stores only unique values.
 Provides fast .has() lookup to check if an item exists.

const set1 = new Set(arr1);
const set2 = new Set(arr2);
Convert both arrays into sets to remove duplicates and enable fast lookup.

const intersection = [...set1].filter(item => set2.has(item));
Loop through set1 and only keep elements that are also in set2.
*/