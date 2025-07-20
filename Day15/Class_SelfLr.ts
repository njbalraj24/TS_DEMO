//----- class -----
class Person {
    name: string;
}
const person = new Person();
person.name = "Pavan";

console.log(person); //Person { name: 'Pavan' }

//----- readonly keyword -----
// the readonly keyword can prevent class members from being changed.
class Person1 {
    private readonly name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}
const person1 = new Person1('SDET')
console.log(person1.getName()); //SDET