function isOnlyDigits(str: string): boolean {
    return /^\d+$/.test(str);
}

// Examples
console.log(isOnlyDigits("123456")); // true
console.log(isOnlyDigits("123a"));   // false

/* 
^ and $ → Anchor the pattern to start and end.
\d → Matches any digit (0–9)
.test(str) → Returns true if the string matches the regex.
*/