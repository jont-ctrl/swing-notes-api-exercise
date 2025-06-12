import express from 'express';
import { getNotes, createNote } from '../controllers/noteController.js';
import authenticateToken from '../middleware/auth.js';

const router = express.Router();

//---------- /api/notes/ -----------

// Protected routes with JWT

// Get user notes
router.get('/', authenticateToken, getNotes);

// Create note
router.post('/', authenticateToken, createNote);

export default router;
