import express from 'express';
import { signup, login } from '../controllers/userController.js';

const router = express.Router();

// router.get('/testing', testing);

//---------- /api/user/ -----------

//Sign up
router.post('/signup', signup);

//Login
router.post('/login', login);

export default router;
