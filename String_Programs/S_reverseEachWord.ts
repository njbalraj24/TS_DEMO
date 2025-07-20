function reverseEachWord(sentence: string): string {
    return sentence
        .trim()
        .split(/\s+/)
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}

// Example usage
const input = "Hello World";
const output = reverseEachWord(input);
console.log(output); // Output: "olleH dlroW"

/* 
trim() – Removes unwanted spaces from start/end.

split(/\s+/) – Splits the sentence into words using any amount of whitespace.

.map(...) – For each word:

split('') turns it into an array of characters.

reverse() reverses the characters.

join('') converts it back to a string.

join(' ') – Joins the reversed words into a single sentence.
*/