/* DTO is a design pattern used to transfer data between software application subsystems. 
It usually contains only fields (data), without business logic.
*/

// DTO Example
interface UserDTO {
  id: number;
  name: string;
  email: string;
}

// Function using DTO
function createUser(user: UserDTO) {
  console.log(`User created: ${user.name}, Email: ${user.email}`);
}

const user: UserDTO = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

createUser(user);