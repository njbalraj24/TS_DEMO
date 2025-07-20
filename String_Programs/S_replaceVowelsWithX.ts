function replaceVowelsWithX(str: string): string {
    return str.replace(/[aeiou]/gi, 'x'); // case-insensitive
}

// Example
console.log(replaceVowelsWithX("Hello World")); 
// Output: "Hxllx Wxrld"
