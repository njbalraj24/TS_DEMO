//Compress a String (Basic RLE) Input: "aaabbccc" → Output: "a3b2c3"

function compressString(str: string): string {
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + count;
            count = 1; //Reset count back to 1 to start counting the next sequence.
        }
    }
    return result;
}
console.log(compressString("aaabbccc")); // "a3b2c3"
/* 
result: will hold the final compressed string.
count: keeps track of how many times the current character has repeated consecutively. It starts at 1 because at least one occurrence of the character exists.
else {
    result += str[i] + count;
    count = 1;
}
If the current character is different from the next one:
  Append the character and its count to the result string (result += str[i] + count).
  Reset count back to 1 to start counting the next sequence.

else {
    result += str[i] + (count > 1 ? count : '');
    count = 1;
    }
Only adds the count if more than one occurrence is found (count > 1 ? count : '').
  This results in a more concise compressed string: repeats >1 are condensed, singles are shown as-is.
  "aaabbccc" → "a3b2c3", "abc" → "abc", "aab" → "a2b".
*/