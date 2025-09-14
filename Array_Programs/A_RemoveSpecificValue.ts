function removeValue<T>(arr: T[], valueToRemove: T): T[] {
    return arr.filter(item => item !== valueToRemove);
}

// Example usage:
const arr = [1, 2, 3, 2, 4, 2, 5];
const filteredArr = removeValue(arr, 2);

console.log(filteredArr);
// Output: [1, 3, 4, 5]