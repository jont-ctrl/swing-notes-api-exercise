import express from 'express';
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  searchNotes,
} from '../controllers/noteController.js';
import authenticateToken from '../middleware/auth.js';

const router = express.Router();

//---------- /api/notes/ -----------

// Protected routes with JWT

// Get user notes
/**
 * @swagger
 * /api/notes:
 *   get:
 *     summary: Hämta alla anteckningar för användaren
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista av anteckningar
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   user_id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   text:
 *                     type: string
 *                   createdat:
 *                     type: string
 *                     format: date-time
 *                   modifiedat:
 *                     type: string
 *                     format: date-time
 */
router.get('/', authenticateToken, getNotes);

// Create note
/**
 * @swagger
 * /api/notes:
 *   post:
 *     summary: Skapa en ny anteckning
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               note:
 *                 type: string
 *             required:
 *               - title
 *               - note
 *     responses:
 *       201:
 *         description: Anteckning skapad
 */
router.post('/', authenticateToken, createNote);

// Update note
/**
 * @swagger
 * /api/notes:
 *   put:
 *     summary: Uppdatera en anteckning
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               noteId:
 *                 type: string
 *               title:
 *                 type: string
 *               note:
 *                 type: string
 *             required:
 *               - noteId
 *               - title
 *               - note
 *     responses:
 *       200:
 *         description: Anteckning uppdaterad
 */
router.put('/', authenticateToken, updateNote);

// Delete note
/**
 * @swagger
 * /api/notes:
 *   delete:
 *     summary: Ta bort en anteckning
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               noteId:
 *                 type: string
 *             required:
 *               - noteId
 *     responses:
 *       200:
 *         description: Anteckning borttagen
 */
router.delete('/', authenticateToken, deleteNote);

// Search notes
/**
 * @swagger
 * /api/notes/search:
 *   get:
 *     summary: Sök anteckningar på titel
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: searchTitle
 *         schema:
 *           type: string
 *         required: true
 *         description: Text att söka efter i titlar
 *     responses:
 *       200:
 *         description: Matchande anteckningar
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   user_id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   text:
 *                     type: string
 *                   createdat:
 *                     type: string
 *                     format: date-time
 *                   modifiedat:
 *                     type: string
 *                     format: date-time
 */
router.get('/search', authenticateToken, searchNotes);

export default router;
