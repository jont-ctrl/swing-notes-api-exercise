import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../models/db.js';
import { v4 as uuidv4 } from 'uuid';

export async function signup(req, res) {
  const { username, password } = req.body;

  // Kolla ej duplicate i db

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: `No username or password provided` });
  }

  if (/\s/.test(username) || /\s/.test(password)) {
    return res
      .status(400)
      .json({ message: `Username and password cannot contain spaces` });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: `Password must be longer than 6 characters long.` });
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    // const id = uuidv4();

    // Spara i db
    await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [
      username,
      hashPassword,
    ]);

    res.status(201).json({ message: `Användare skapad ${username}` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}
