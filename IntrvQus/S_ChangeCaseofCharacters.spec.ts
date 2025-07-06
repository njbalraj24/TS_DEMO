//Input: "HeLLo" → Output: "hEllO"

function swapCase(str: string): string {
    return str.split('').map(char =>
        char === char.toUpperCase()
            ? char.toLowerCase()
            : char.toUpperCase()
    ).join('');
}
console.log(swapCase("HeLLo")); // "hEllO"