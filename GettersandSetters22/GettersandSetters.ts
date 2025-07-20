//Getters and Setters allow you to control access to an object’s properties.

class Employee {
  private _salary: number;

  constructor(private name: string) {
    this._salary = 30000;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(amount: number) {
    if (amount < 30000) {
      throw new Error("Salary too low!");
    }
    this._salary = amount;
  }
}

const emp = new Employee("John");
console.log(emp.salary); // Getter
emp.salary = 40000;      // Setter
console.log(emp.salary); // 40000
