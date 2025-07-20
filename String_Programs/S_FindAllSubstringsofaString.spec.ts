//Input: "abc" → Output: ["a", "ab", "abc", "b", "bc", "c"]

function allSubstrings(str: string): string[] {
    let result: string[] = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}
console.log(allSubstrings("abc")); // ["a", "ab", "abc", "b", "bc", "c"]