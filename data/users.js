import bcrypt from "bcrypt";


const SALT_ROUNDS = 10;
const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', SALT_ROUNDS),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('123456', SALT_ROUNDS),
  },
  {
    name: 'Jane Doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('123456', SALT_ROUNDS),
  },
];

export default users;
