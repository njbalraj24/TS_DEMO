//Given a TypeScript array of numbers, filter out only even numbers.

let numbers:number[] = [1,2,3,4,5]

let OnlyEven = numbers.filter((element)=>
{
   return (element%2==0);
})

console.log(OnlyEven); //[ 2, 4 ]

/* Suggestion
1. Use const instead of let for values that don't change:
2. Use === for strict equality, to avoid unexpected coercion:

const numbers: number[] = [1, 2, 3, 4, 5];
const onlyEven = numbers.filter((element) => element % 2 === 0);
console.log(onlyEven); // [2, 4]

*/