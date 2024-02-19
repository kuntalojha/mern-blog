// /server/routes/user.route.js
// Import express from express
import express from 'express';

// Import from ../controllers/user.controller.js for use controllers
import { test } from '../controllers/user.controller.js';

// Here use express Router()
const router = express.Router();
// app.get('/test', (req, res) => {
// router.get('/test', (req, res) => {
//   res.json({ massage: 'API is working' });
// });

router.get('/test', test);

// Here we export this as a router
// If we want to use this we have to
export default router;
