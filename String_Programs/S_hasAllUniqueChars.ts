function hasAllUniqueChars(str: string): boolean {
    const seen = new Set<string>();

    for (const char of str) {
        if (seen.has(char)) {
            return false; // Duplicate found
        }
        seen.add(char);
    }

    return true; // All characters are unique
}

// Example usage
console.log(hasAllUniqueChars("abcdef"));   // true
console.log(hasAllUniqueChars("hello"));    // false (l repeats)

/* 
Set is used to track already-seen characters.

For each char in the string:

If char is already in seen, return false.

Otherwise, add it to the Set.

If loop finishes without duplicates, return true.
*/