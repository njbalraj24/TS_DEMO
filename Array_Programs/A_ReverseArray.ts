/*
Without using reverse(), reverse an array manually.
Input: [1, 2, 3] → Output: [3, 2, 1]
*/
let arr3 = [1, 2, 3];
let reversed:number[] = [];
for (let i = arr3.length - 1; i >= 0; i--) 
{
   reversed.push(arr3[i]);
}
console.log(reversed); // [3, 2, 1]