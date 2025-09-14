//Input: [5, 1, 8, -2, 0] → Output: Max: 8, Min: -2

//Approach1:
let arr1:number[] = [5, 1, 8, -2, 0];

let max = arr1[0];
for(let i=0; i<arr1.length;i++)
{
  if(arr1[i]>max)
  {
    max = arr1[i];
  }
}
console.log(max); //8

let min = arr1[0];
for(let i=0; i<arr1.length;i++)
{
  if(arr1[i]<min)
  {
    min = arr1[i];
  }
}
console.log(min); //-2

//Approach2:
let arr4 = [5, 1, 8, -2, 0];
let max1 = Math.max(...arr4);
let min1 = Math.min(...arr4);
console.log(`Max: ${max1}, Min: ${min1}`); // Max: 8, Min: -2
