import express from 'express';
import { signup } from '../controllers/userController.js';

const router = express.Router();

// router.get('/testing', testing);

//---------- /api/user/ -----------

//Sign up
router.post('/signup', signup);

export default router;
