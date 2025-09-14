//Input: "Hello World" → Output: 3

function countVowels(str: string): number {
    return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(countVowels("Hello World")); // 3

/* 
The .match() method searches a string for matches against a regular expression (regex) and returns an array of all matches.
The regex pattern here is /[aeiou]/gi, which means:
 [aeiou]: Match any one character that is one of a, e, i, o, or u.
 g: The global flag, so it finds all occurrences in the string, not just the first one.
 i: The ignore case flag, so it matches both uppercase and lowercase vowels (A and a both match). 
 
The Optional Chaining Operator: ?.
?.length
The ?. (optional chaining) operator safely accesses the .length property only if the previous value is not null or undefined.
The .match() method can return null if no match is found (e.g., if the string has no vowels, it returns null instead of an array).
So:
If .match() returns an array, .length gives the number of vowels matched.
If .match() returns null, then .length is not accessed and the expression evaluates to undefined.
 */