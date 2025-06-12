import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

  const hashPassword = await bcrypt.hash(password, 10);

  res
    .status(201)
    .json({ message: `Användare skapad ${username} pw: ${hashPassword}` });
}
