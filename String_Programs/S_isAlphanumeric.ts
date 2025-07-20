function isAlphanumeric(str: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(str);
}

// Examples
console.log(isAlphanumeric("Hello123")); // true
console.log(isAlphanumeric("Hello 123")); // false (space is not alphanumeric)
console.log(isAlphanumeric("!@#"));       // false

/* 
^ and $ → Anchor the pattern to start and end.
+ → Means one or more characters must match
.test(str) → Returns true if the string matches the regex.
*/