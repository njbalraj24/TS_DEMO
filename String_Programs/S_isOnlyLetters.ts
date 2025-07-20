function isOnlyLetters(str: string): boolean {
    return /^[a-zA-Z]+$/.test(str);
}

// Examples
console.log(isOnlyLetters("HelloWorld")); // true
console.log(isOnlyLetters("Hello123"));   // false

/* 
^ and $ → Anchor the pattern to start and end.
[a-zA-Z] → Matches any uppercase or lowercase English letter
.test(str) → Returns true if the string matches the regex.
*/