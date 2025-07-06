//Input: "abcde", "cdeab" → Output: true

function isRotation(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;
    return (str1 + str1).includes(str2);
}
console.log(isRotation("abcde", "cdeab")); // true