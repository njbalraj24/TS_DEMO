//Input: "Hello World" → Output: 3

function countVowels(str: string): number {
    return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(countVowels("Hello World")); // 3