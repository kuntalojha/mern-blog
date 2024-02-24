// /server/routes/auth.route.js
// Import express from express
import express from 'express';

// Here I inport auth controller signin async function and signup async function
import { signin, signup } from '../controllers/auth.controller.js';

// Here use express Router() and make a veriable router
const router = express.Router();

// When I post something we use post() method
//  Here signup and signup are function I make it in controller
router.post('/signup', signup);
router.post('/signin', signin);

export default router;
