import express from 'express';
import { signup, login } from '../controllers/userController.js';

const router = express.Router();

//---------- /api/user/ -----------

//Sign up
/**
 * @swagger
 * /api/user/signup:
 *   post:
 *     summary: Registrera ny användare
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       201:
 *         description: Användare skapad
 *       400:
 *         description: Felaktiga data (saknade eller ogiltiga fält)
 *       500:
 *         description: Serverfel
 */
router.post('/signup', signup);

//Login
/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Logga in användare och få JWT-token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Inloggning lyckades, returnerar token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       400:
 *         description: Saknade fält eller ogiltiga data
 *       401:
 *         description: Felaktiga inloggningsuppgifter
 *       500:
 *         description: Serverfel
 */
router.post('/login', login);

export default router;
