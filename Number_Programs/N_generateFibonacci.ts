/* 
So the series goes:
0, 1, 1, 2, 3, 5, 8, 13, 21, ...
*/

function printFibonacci(count: number): void {
    let n1 = 0, n2 = 1, n3: number;

    // Print the first two numbers
    console.log(`${n1}`);
    console.log(`${n2}`);

    for (let i = 2; i < count; ++i) {
        n3 = n1 + n2;
        console.log(n3);
        n1 = n2;
        n2 = n3;
    }
}

// Call the function with count = 10
printFibonacci(10);