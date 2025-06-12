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

    res.status(201).json({
      message: `Created note: ${title} , for userid: ${userIdFromToken}`,
    });
  } catch (error) {
    console.error('Error creating note', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function updateNote(req, res) {
  const userIdFromToken = req.user.userId;

  const { title, note, noteId } = req.body;

  try {
    await pool.query(
      'UPDATE notes SET title = $1, text = $2, modifiedAt = NOW() WHERE id = $3 AND user_id = $4',
      [title, note, noteId, userIdFromToken]
    );

    res.status(201).json({
      message: `Updated title: ${title} , for userid: ${userIdFromToken}`,
    });
  } catch (error) {
    console.error('Error updating note', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function deleteNote(req, res) {
  const userIdFromToken = req.user.userId;

  const { noteId } = req.body;

  try {
    const result = await pool.query(
      'DELETE FROM notes WHERE id = $1 AND user_id = $2',
      [noteId, userIdFromToken]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: 'Note not found or does not belong to user',
      });
    }

    res.status(201).json({
      message: `Deleted note: ${noteId} , for userid: ${userIdFromToken}`,
    });
  } catch (error) {
    console.error('Error deleting note', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
