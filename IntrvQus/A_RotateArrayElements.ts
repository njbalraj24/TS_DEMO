//Rotate elements to the right by k steps.
//Input: [1, 2, 3, 4, 5], k = 2 → Output: [4, 5, 1, 2, 3]

function rotateRight(arr: number[], k: number): number[] {
    k = k % arr.length;
    const removed = arr.splice(-k); // removes last k elements
    arr.unshift(...removed);        // adds them to the beginning
    return arr;
}
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

/* 
k = k % arr.length;
Ensures k does not exceed the length of the array (which would cause redundant rotations).
Example: If array length = 5 and k = 7, then k = 7 % 5 = 2.
So we only need to rotate 2 steps to the right.

arr.splice(-k) removes the last k elements from the array.
Negative index (-k) means: start counting from the end.
splice() mutates the original array and returns the removed elements.

Example:
 Original arr = [1, 2, 3, 4, 5], k = 2
 arr.splice(-2) removes [4, 5] from arr
 Now: arr = [1, 2, 3], removed = [4, 5]

arr.unshift(...removed);
This line adds the removed elements to the start of the array.
...removed uses the spread operator to insert individual elements, not a nested array.
*/
