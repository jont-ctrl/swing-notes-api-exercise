import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function signup(req, res) {
  const { username, password } = req.body;

  // Kolla ej duplicate i db, och ej tom fält

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: `No username or password provided` });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  res.json({ message: `Användare skapad ${username} pw: ${hashPassword}` });
}
