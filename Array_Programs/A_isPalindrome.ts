function isPalindromeArray<T>(arr: T[]): boolean {
    const reversed = [...arr].reverse();
    return arr.every((val, index) => val === reversed[index]);
}

// Test cases
console.log(isPalindromeArray([1, 2, 3, 2, 1])); // true
console.log(isPalindromeArray(['a', 'b', 'c', 'b', 'a'])); // true
console.log(isPalindromeArray([1, 2, 3, 4, 5])); // false
console.log(isPalindromeArray(['x', 'y', 'z'])); // false

//===============
/* 
We're declaring a generic function: <T> means it can work with any data type: number[], string[], etc.

const reversed = [...arr].reverse();
 ...arr is the spread operator, which clones the original array into a new one.
 Why clone? Because .reverse() modifies the array in-place.
 So reversed is a reversed copy of the original array.

return arr.every((val, index) => val === reversed[index]);
 .every() checks if all elements satisfy a condition.
 It loops through each item in the original arr.
 val is the value at index i in the original array.
 It compares with the value at the same index in reversed.
 If every element matches, it returns true → it's a palindrome.
*/