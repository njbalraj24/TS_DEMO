/* //1. if Condition

//Example1 - Check eligible for Voting or Not
let age:number=20

if(age>=18)
{
    console.log("Eligible for Voting")
} */

/* //2. if else condition

//Example 2 - Print number is Even or Odd

let x:number=16

if(x%2==0)
{
    console.log(`${x} Even Number`)
}
else
{
    console.log(`${x} Odd Number`)
} */

//3. Nested If Else condition - Depending on the marks, display appropriate grade.
/* 
marks >=90 Grade A
marks >=75 Grade B
marks >=60 Grade C
Grade D
 
let marks: number = 53

if (marks >= 90 && marks <= 100) {
    console.log('Grade A')
}
else if (marks >= 75 && marks <= 90) {
    console.log('Grade B')
}
else if (marks >= 60 && marks <= 75) {
    console.log('Grade C')
}
else {
    console.log('Grade D')
}
*/

/*  Example 4: Browser Selection 
let browser: string = "chrome1"

if (browser == 'chrome') {
    console.log("browser is chrome")
}
else if (browser == 'firefox') {
    console.log("browser is firefox")
}
else if (browser == 'Edge') {
    console.log("browser is Edge")
}
else {
    console.log("Other browser")
}

*/

/*  4. Switch Case Statement 
let day:number=3

switch (day) {
    case 1:
        console.log('Monday')
        break

    case 2:
        console.log('Tuesday')
        break

    case 3:
        console.log('Wednesday')
        break

    case 4:
        console.log('Thursday')
        break

    case 5:
        console.log('Friday')
        break

    case 6:
        console.log('Saturday')
        break

    case 7:
        console.log('Sunday')
        break

    default: console.log('None')
} */

/*  Example2: The Switch statement also includes expression */

let x:number=10 , y:number=15

switch(x-y)
{
    case 0: console.log('Result is Zero'); break;
    case 5: console.log('Result is Positive'); break;
    case -5: console.log('Result is Negative'); break;
    default: console.log('None')
}