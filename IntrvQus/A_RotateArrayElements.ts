//Rotate elements to the right by k steps.
//Input: [1, 2, 3, 4, 5], k = 2 → Output: [4, 5, 1, 2, 3]

function rotateRight(arr: number[], k: number): number[] {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
