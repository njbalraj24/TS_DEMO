/* If condition:
1. Check if a character is uppercase.
2. Check if a number is a multiple of 10.
 */

//1. Check if a character is uppercase.
let value:string='B'

if(value===value.toUpperCase())
{
  console.log('Yes, given character is in Upper case')
}

//2. Check if a number is a multiple of 10.
let num:number=40

if(num%10===0)
{
  console.log('Yes, num is multiple of 10')
}

/* If else condition:
3. Check if a person is a teenager (age between 13 and 19).
4. Compare two numbers and print the larger one.
5. Check if a number is positive, negative, or zero.
6. Check if a person is eligible for a senior citizen discount (age >= 60)
 */
console.log('Assignments on If else condition')
//3. Check if a person is a teenager (age between 13 and 19).
let age:number=18
if(age>=13 && age<=19)
{
  console.log('He is a Teenager')
}
else
{
  console.log('He is a NOT a Teenager')
}

//4. Compare two numbers and print the larger one.
let num1:number=24
let num2:number=44

if(num1>num2)
{
 console.log(`${num1} is larger one`)
}
else
{
 console.log(`${num2} is larger one`)
}

//5. Check if a number is positive, negative, or zero.
let x:number=20;

if(x>0)
{
  console.log(`${x} is Positive`)
}
else if(x<0){
 console.log(`${x} is Negative`)
}
else
{
 console.log('Number is Zero')
}

//6. Check if a person is eligible for a senior citizen discount (age >= 60)
let age1:number=59

if(age1>=60)
{
  console.log('This person is eligible for a senior citizen discount')
}
else{
 console.log('This person is NOT eligible for a senior citizen discount')
}

/* Nested if else:
7. Check if a number is positive and even.
8. Check if a character is an uppercase vowel.
9. Find the largest of three numbers.
10. Check if a number is a multiple of both 5 and 10.
11. Check if a character is a vowel or consonant.
12. Check if a number is divisible by both 2 and 3.
 */
console.log('...Nested if else Programms...')
//7. Check if a number is positive and even.
let y:number=24
if(y>0 && y%2==0)
{
 console.log('Number is positive and even')
}
else if(y>0 && y%2!==0)
{
 console.log('Number is positive and ODD')
}
else
{
 console.log('Number is Negative or Zero')
}

//****** 8. Check if a character is an uppercase vowel. *******
let char:string='e'
let vowels:string[]=['A','E','I','O','U']
if((char===char.toUpperCase()) && vowels.includes(char))
{
  console.log('character is an uppercase and vowel')
}
else if((char===char.toUpperCase()) && !vowels.includes(char))
{
  console.log('character is an uppercase But NOT vowel')
}
else if(!(char===char.toUpperCase()) && vowels.includes(char.toUpperCase()))
{
  console.log('character is an NOT uppercase BUT it is vowel')
}
else
{
console.log('character is an NOT uppercase and NOT vowel')
}


//9. Find the largest of three numbers.
let a:number=4;
let b:number=5;
let c:number=3;

if(a>b && a>c)
{
 console.log(`${a} is the largest`)
}
else if(b>a && b>c)
{
 console.log(`${b} is the largest`)
}
else
{
 console.log(`${c} is the largest`)
}

//10. Check if a number is a multiple of both 5 and 10.
let n1:number=37

if((n1%5==0) && (n1%10==0))
{
 console.log('number is a multiple of both 5 and 10.')
}
else if((n1%5==0) && !(n1%10==0))
{
 console.log('number is a multiple 5 but NOT multiple of 10.')
}
else
{
 console.log('number is a NOT a multiple of 5 and 10.')
}

//11. Check if a character is a vowel or consonant.
/* let char1:string='BA'
let vowels1:string[]=['A','E','I','O','U']

if(vowels1.includes(char1))
{
 console.log('Character is a Vowel')
}
else if(!(vowels1.includes(char1)) && char1.length==0)
{
 console.log('Character is a Consonant')
}
else
{
 console.log('None')
} */

//**********
let char1: string = 'B';
let vowels1: string[] = ['A', 'E', 'I', 'O', 'U'];

if (char1.length !== 1 || !char1.match(/[a-zA-Z]/)) {
  console.log('None');
} else if (vowels1.includes(char1.toUpperCase())) {
  console.log('Character is a Vowel');
} else {
  console.log('Character is a Consonant');
}

//12. Check if a number is divisible by both 2 and 3.
let n2:number=11

if((n2%2==0) && (n2%3==0))
{
  console.log(`${n2} is divisible by both 2 and 3.`)
}
else if((n2%2==0) && !(n2%3==0))
{
 console.log(`${n2} is divisible by 2 BUT NOT by 3.`)
}
else if(!(n2%2==0) && (n2%3==0))
{
 console.log(`${n2} is divisible by 3 BUT NOT by 2.`)
}
else
{
  console.log(`${n2} is NOT divisible by 2 and 3.`)
}

/* Switch case:
13. Print the corresponding month name for a given month number.
14. Perform basic arithmetic operations based on user input.
15. Print the season based on the month number. */

console.log('***Switch case programms***')
//13. Print the corresponding month name for a given month number.
let month:number=9

switch(month)
{
  case 1: console.log('Jan'); break;
  case 2: console.log('Feb'); break;
  case 3: console.log('Mar'); break;
  case 4: console.log('Apr'); break;
  case 5: console.log('May'); break;
  case 6: console.log('June'); break;
  case 7: console.log('July'); break;
  case 8: console.log('Aug'); break;
  case 9: console.log('Sept'); break;
  case 10: console.log('Oct'); break;
  case 11: console.log('Nov'); break;
  case 12: console.log('Dec'); break;
  default: console.log('None')
}

//14. Perform basic arithmetic operations based on user input.
/* let p:number=10;
let q:number=20;

switch(p+q)
{
  case 30: console.log('+ve results'); break;
  case -30: console.log('-ve results'); break;
  default: console.log('Zero')
} */

//*******************
let p: number = 10;
let q: number = 20;
let operation: string = '+'; // Try changing to '-', '*', '/', '%'

switch (operation) {
  case '+':
    console.log(`Result: ${p + q}`);
    break;
  case '-':
    console.log(`Result: ${p - q}`);
    break;
  case '*':
    console.log(`Result: ${p * q}`);
    break;
  case '/':
    console.log(`Result: ${p / q}`);
    break;
  case '%':
    console.log(`Result: ${p % q}`);
    break;
  default:
    console.log('Invalid operation');
}

//15. Print the season based on the month number.
let monthnum:number=9;

switch(monthnum)
{
  case 1: console.log('Jan is Winter'); break;
  case 2: console.log('Feb is Winter'); break;
  case 3: console.log('Mar is Winter'); break;
  case 4: console.log('Apr is Summer'); break;
  case 5: console.log('May is Summer'); break;
  case 6: console.log('June is Summer'); break;
  case 7: console.log('July is Summer'); break;
  case 8: console.log('Aug is Rainy'); break;
  case 9: console.log('Sept is Rainy'); break;
  case 10: console.log('Oct is Rainy'); break;
  case 11: console.log('Nov is Winter'); break;
  case 12: console.log('Dec is Winter'); break;
  default: console.log('Invalid month number')
}