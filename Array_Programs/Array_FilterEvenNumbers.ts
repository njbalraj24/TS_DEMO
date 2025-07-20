//Input: [1, 2, 3, 4, 5] → Output: [2, 4]

let arr:number[] = [1, 2, 3, 4, 5];

let EvenNumber = arr.filter(ele => ele%2==0);
console.log(EvenNumber); // [ 2, 4 ]

let EvenNumber1 = arr.some(ele => ele%2==0);
console.log(EvenNumber1); // true
