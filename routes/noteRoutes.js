import express from 'express';
import { getNotes } from '../controllers/noteController.js';

const router = express.Router();

//---------- /api/notes/ -----------

//Get all notes
router.get('/', getNotes);

export default router;
