let value: string = "Balu";
let rev: string = "";

for (let i = value.length - 1; i >= 0; i--) 
{
    rev = rev + value.charAt(i);
}
console.log(rev);