//Compress a String (Basic RLE)
//Input: "aaabbccc" → Output: "a3b2c3"

function compressString(str: string): string {
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + count;
            count = 1;
        }
    }
    return result;
}
console.log(compressString("aaabbccc")); // "a3b2c3"