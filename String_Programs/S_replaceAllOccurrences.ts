function replaceAllOccurrences(str: string, search: string, replaceWith: string): string {
    return str.replaceAll(search, replaceWith);
}

// Example
console.log(replaceAllOccurrences("apple banana apple", "apple", "orange"));
// Output: "orange banana orange"

/* 
replaceAll()	All
*/