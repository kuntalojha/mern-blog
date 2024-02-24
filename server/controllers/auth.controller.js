// server/controller/auth.controller.js

// Here I import User model from models/user.model.js
import User from '../models/user.model.js';

// bcrypt js is use for change password as a hash form or use for hash password.
import bcryptjs from 'bcryptjs';

import jwt from 'jsonwebtoken';

// Here I import utils/error.js errorHandler
import { errorHandler } from '../utils/error.js';

// Here I make async function for signin and export it as name signup
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

// Here I make async function for signin and export it as name signin
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All fields are required'));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
     return next(errorHandler(404, 'User not found'));
    }
    // Here we compare password with bcryptjs
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'));
    }

    // Here I make a token for track user and authenticate the user later
    const token = jwt.sign(
      {
        id: validUser._id,
      },
      process.env.JWT_SECRET
    );

    // We don't want to send password so we separate here
    //  And store at the rest
    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
