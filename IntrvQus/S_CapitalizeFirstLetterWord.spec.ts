//Input: "hello world" → Output: "Hello World"

function capitalizeWords(sentence: string): string {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(capitalizeWords("hello world")); // "Hello World"