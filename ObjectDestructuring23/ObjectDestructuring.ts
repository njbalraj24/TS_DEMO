//Object Destructuring allows you to unpack values from objects or arrays into distinct variables.
const user = {
  id: 1,
  name2: "Bob",
  email: "bob@example.com"
};

const { name2, email } = user;
console.log(name2);  // "Bob"
console.log(email); // "bob@example.com"