// server/controller/auth.controller.js

// Here I import User model from models/user.model.js
import User from '../models/user.model.js';

// bcrypt js is use for change password as a hash form or use for hash password.
import bcryptjs from 'bcryptjs';

// Here I import utils/error.js errorHandler
import { errorHandler } from '../utils/error.js';

// Here I make a function and export it.
//  This is a async function
// Here next is use for middleware
export const signup = async (req, res, next) => {
  /* const { property1, property2, ... } = object;

  const person = {
    name: 'John',
    age: 30,
    city: 'New York',
  };

  const { name, age, city } = person;

  console.log(name); // Output: 'John'
  console.log(age); // Output: 30
  console.log(city); // Output: 'New York'
*/

  // This will reaturn the json data to the consol
  // console.log(req.body);
  // Here I distract data from req.body then we get the data seperatly
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    // return res.status(400).json({ message: 'All fields are required' });
    // Here errorHandeler come from utils
    next(errorHandler(400, 'All fields are required'));
  }
  // Hash password using bcryptjs
  // here 10 is number of round mixed our password.
  const hashedPassword = bcryptjs.hashSync(password, 10);

  // Here I use User from '../models/user.model.js'
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    //  This is use for save data in database
    await newUser.save();
    res.json('Signup successful');
  } catch (error) {
    // res.status(500).json({
    //   message: error.message,
    // });
    next(error);
  }
};
