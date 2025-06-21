//
function secondLargest(arr: number[]): number | null {
    let unique = [...new Set(arr)];
    if (unique.length < 2) return null;
    unique.sort((a, b) => b - a);
    return unique[1];
}
console.log(secondLargest([10, 5, 8, 12, 12])); // 10