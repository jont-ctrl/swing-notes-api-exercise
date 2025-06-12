import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../models/db.js';
import { v4 as uuidv4 } from 'uuid';

export async function getNotes(req, res) {
  const userIdFromToken = req.user.userId;

  console.log('userIdFromToken', userIdFromToken);

  try {
    const result = await pool.query('SELECT * FROM notes WHERE user_id = $1', [
      userIdFromToken,
    ]);

    console.log(result.rows);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error getting notes', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function createNote(req, res) {
  const userIdFromToken = req.user.userId;

  const { title, note } = req.body;

  try {
    await pool.query(
      'INSERT INTO notes (user_id, title, text, createdat, modifiedat) VALUES ($1,$2,$3,NOW(),NOW())',
      [userIdFromToken, title, note]
    );

    res.status(201).json({ message: `Created note for: ${userIdFromToken}` });
  } catch (error) {
    console.error('Error creating note', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
