import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../models/db.js';
import { v4 as uuidv4 } from 'uuid';

export async function getNotes(req, res) {
  const userIdFromToken = req.user.userId;

  console.log('userIdFromToken', userIdFromToken);

  res.status(200).json({ message: `Get notes for: ${userIdFromToken}` });
}

export async function createNote(req, res) {
  const userIdFromToken = req.user.userId;

  const { title, note } = req.body;

  try {
    await pool.query(
      'INSERT INTO notes (user_id, title, text, createdat, modifiedat) VALUES ($1,$2,$3,$4,$5)',
      [userIdFromToken, title, note, new Date(), new Date()]
    );

    res.status(201).json({ message: `Created note for: ${userIdFromToken}` });
  } catch (error) {
    console.error('Error creating note', error);
  }
}
