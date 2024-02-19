// /server/routes/auth.route.js
// Import express from express
import express from 'express';

// Here I inport auth controller signin async function
import { signup } from '../controllers/auth.controller.js';

// Here use express Router() and make a veriable router
const router = express.Router();

// When I post something we use post() method
//  Here signup is a function I make it in controller
router.post('/signup', signup);

export default router;
