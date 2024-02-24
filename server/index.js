// server/ index.js
// Import express from express
import express from 'express';

// Import mongoose from mongoose for connect with mongodb.
import mongoose from 'mongoose';

// Import dotenv from dotenv for hide the mongoDB connection string. This one use for securaty reason
import dotenv from 'dotenv';

// Import router (Here I change the name userRoutes) from ./routes/user.route.js
//! In the backend we should always use .js extension
// This is come from router
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

// Here we connect mongodb using mongoose in mongoDB atlas
// "mongodb+srv://<username>:<password>@mern-blog.b85jjem.mongodb.net/<cellectionname>?retryWrites=true&w=majority"
// The connection string is inside .env file for sefty perpase
// This is the way, How we connect Nodejs using Expressjs to the MongoDB using mongoose at MongoDB Atlas.

// Here we config the dotenv for using this.
dotenv.config();

// MongoDB connection using mongoose
// Use MONGO_ATLAS for connect with MongoDB Atlas
// Use MONGO_LOCAL for connect with MongoDB Local
// mongodb://localhost:27017/<database_name> for connect with local MongoDB
// MONGO_LOCAL = "mongodb://localhost:27017/test" this data is store in as averiable  .env
// Here the variable name is MONGO_LOCAL and anather one is MONGO_ATLAS

mongoose
  // .connect(process.env.MONGO_ATLAS)
  .connect(process.env.MONGO_LOCAL)
  .then(() => {
    // console.log('MongoDB is connected to the MongoDB Atlas!');
    console.log('MongoDB is connected to the MongoDB Localhost!');
  })
  .catch((err) => {
    console.log(err);
  });

// create express app
const app = express();

// here I send json data
// This is allow json as the input of the backend
app.use(express.json());

// This is the server port number
const port = 3000;

// Here I make a get request on root or /
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// make test api for testing
//* This code I will use in user.route.js
/* 
app.get('/user', (req, res) => {
  res.json({ massage: 'Api is working' });
});
*/
//! This userRoutes is coming from ./routes/user.route.js
// app.get('/api/user', userRoutes);
// This one is not working because here we should use app.use
// like this way app.use('/api/user', userRoutes);
// here  we using this so write use not get
//And get is using at user.routh.js file at router folder

// Here we are using userRoutes from userRoutes
app.use('/api/user', userRoutes);
// Here we are using authRoutes from authRoutes

/*
app.post('/api/auth/signup', async (req, res) => {
  console.log(req.body);
});
This one is resplasement of above one
*/
app.use('/api/auth', authRoutes);

// Here I use Middleware
app.use((err, req, res, next) => {
  // Here status code come from error(err)
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Here app.listen use for run expressjs  server on any port. I mension the port above
app.listen(port, () => {
  console.log(`Server is Running on port ${port} !`);
});
