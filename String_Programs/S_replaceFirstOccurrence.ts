function replaceFirstOccurrence(str: string, search: string, replaceWith: string): string {
    return str.replace(search, replaceWith);
}

// Example
console.log(replaceFirstOccurrence("apple banana apple", "apple", "orange"));
// Output: "orange banana apple"

/* 
replace()	First only
*/