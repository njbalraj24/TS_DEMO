//Return the first character that doesn’t repeat.
//Input: "aabbcddeff" → Output: "c"

function firstNonRepeatingChar(str: string): string | null {
    const count: { [char: string]: number } = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of str) {
        if (count[char] === 1) return char;
    }
    return null;
}
console.log(firstNonRepeatingChar("aabbcddeff")); // "c"