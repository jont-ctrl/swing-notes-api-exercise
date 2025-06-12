import express from 'express';
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/noteController.js';
import authenticateToken from '../middleware/auth.js';

const router = express.Router();

//---------- /api/notes/ -----------

// Protected routes with JWT

// Get user notes
router.get('/', authenticateToken, getNotes);

// Create note
router.post('/', authenticateToken, createNote);

// Update note
router.put('/', authenticateToken, updateNote);

// Delete note
router.delete('/', authenticateToken, deleteNote);

export default router;
