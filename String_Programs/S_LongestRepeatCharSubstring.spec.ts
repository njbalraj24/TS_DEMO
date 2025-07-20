//Find the longest sequence of repeating characters.
//Input: "aaabbccccd" → Output: "cccc"

function longestRepeatingSubstring(str: string): string {
    let maxChar = '';
    let maxLength = 0;
    let currentChar = '';
    let currentLength = 0;

    for (let char of str) {
        if (char === currentChar) {
            currentLength++;
        } else {
            currentChar = char;
            currentLength = 1;
        }

        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxChar = currentChar;
        }
    }

    return maxChar.repeat(maxLength);
}
console.log(longestRepeatingSubstring("aaabbccccd")); // "cccc"