//Input: "hello world" → Output: "Hello World"

function capitalizeWords(sentence: string): string {
    return sentence
        .split(' ') //space is must
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '); //space is must
}
console.log(capitalizeWords("hello world")); // "Hello World"

//===========================================

function capsFirst(str: string): string {
  return str
    .trim()
    .split(/\s+/) // handles multiple spaces
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(capsFirst('   balraj   n j  ')); // Output: "Balraj N J"