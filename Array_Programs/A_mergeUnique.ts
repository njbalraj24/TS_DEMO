function mergeUnique<T>(arr1: T[], arr2: T[]): T[] {
    return [...new Set([...arr1, ...arr2])];
}

// Test
console.log(mergeUnique([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]

/* 
Set automatically removes duplicates.
[...new Set(...)] converts it back to an array.

Extra Case: Merging Arrays of Strings
const qaTeam1 = ["Alice", "Bob"];
const qaTeam2 = ["Charlie", "Alice"];

console.log(mergeUnique(qaTeam1, qaTeam2)); // ["Alice", "Bob", "Charlie"]
*/