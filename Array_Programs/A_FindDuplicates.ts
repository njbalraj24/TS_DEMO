let arr:number[] = [1,2,3,1,2];

for(let i=0; i<arr.length; i++)
{
    for(let j=i+1; j<=arr.length; j++)
    {
        if(arr[i] === arr[j])
        {
            console.log(arr[j]);
        }
    }
}
// 1, 2