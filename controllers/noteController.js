import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../models/db.js';
import { v4 as uuidv4 } from 'uuid';

export async function getNotes(req, res) {
  const { username, password } = req.body;

  res.status(200).json({ message: 'Get notes' });
}
