function findLongestWord(sentence: string): string {
    const words = sentence.trim().split(/\s+/); // Split by whitespace
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

// Example usage
const sentence = "TypeScript is a powerful typed superset of JavaScript";
console.log(findLongestWord(sentence)); // Output: "TypeScript"

/* 
const words = sentence.trim().split(/\s+/);
 trim() removes extra spaces at the start and end.
 split(/\s+/) splits the sentence into words using one or more spaces.

if (word.length > longest.length)
 Keep updating longest if a longer word is found.
*/