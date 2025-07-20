function flattenArray(arr: any[]): any[] {
    return arr.flat(Infinity); // Infinity flattens deeply nested arrays
}

// Example
const nested = [1, [2, [3, [4, 5]]], 6];
const flat = flattenArray(nested);
console.log(flat); // [1, 2, 3, 4, 5, 6]

/* 
Using flat() (built-in, ES2019+)
flat(Infinity) automatically handles deeply nested arrays without needing recursion.
*/