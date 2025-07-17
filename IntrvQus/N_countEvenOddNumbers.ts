function countEvenOddNumbers(arr: number[]):{even:number, odd:number}
{
    let even = 0;
    let odd = 0;

    for(let num of arr)
    {
        if(num%2==0)
        {
            even++;
        }
        else
        {
            odd++;
        }
    }
    return {even, odd};
}
console.log(countEvenOddNumbers([1,2,3,4,5,6])); //{ even: 3, odd: 3 }