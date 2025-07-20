let arr8:number[] = [1,2,3,5];

let sum1=0;
for(let i=0; i<arr8.length; i++)
{
    sum1 = sum1 + arr8[i];
}

let sum2=0;
for(let i=0; i<=5; i++)
{
    sum2 = sum2 + i;
}

console.log("Missing Number is: "+(sum2-sum1));