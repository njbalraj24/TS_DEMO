function areArraysEqual(arr1: any[], arr2: any[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

// Example usage
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [3, 2, 1];

console.log(areArraysEqual(array1, array2)); // true
console.log(areArraysEqual(array1, array3)); // false (different order)

/* 
if (arr1.length !== arr2.length)
 If lengths don't match, arrays can't be equal.

if (arr1[i] !== arr2[i])
 Compares each element using === to ensure both value and type match.
*/