/* 
Given a sentence like --> "Hello world this is TypeScript"
You should return --> "TypeScript is this world Hello"
*/

function reverseWords(sentence: string): string {
    return sentence.trim().split(/\s+/).reverse().join(' ');
}

// Example usage
const input = "Hello world this is TypeScript";
const output = reverseWords(input);
console.log(output); // Output: "TypeScript is this world Hello"

/* 
trim() – Removes leading and trailing spaces.
split(/\s+/) – Splits the sentence into words using one or more spaces.
reverse() – Reverses the array of words.
join(' ') – Joins the reversed array into a sentence with single spaces.
*/