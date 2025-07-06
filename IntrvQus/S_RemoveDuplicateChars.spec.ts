//Input: "programming" → Output: "progamin"

function removeDuplicateChars(str: string): string {
    let seen = new Set<string>();
    let result = '';
    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}
console.log(removeDuplicateChars("programming")); // "progamin"