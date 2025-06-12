import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../models/db.js';
import { v4 as uuidv4 } from 'uuid';

export async function getNotes(req, res) {
  const userIdFromToken = req.user.userId;

  const { username, password } = req.body;

  console.log('userIdFromToken', userIdFromToken);

  res.status(200).json({ message: `Get notes for: ${userIdFromToken}` });
}
