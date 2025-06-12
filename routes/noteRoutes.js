import express from 'express';
import { getNotes } from '../controllers/noteController.js';
import authenticateToken from '../middleware/auth.js';

const router = express.Router();

//---------- /api/notes/ -----------

//Get user notes
router.get('/', authenticateToken, getNotes);

export default router;
