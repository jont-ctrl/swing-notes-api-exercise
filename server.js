import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Middleware json
app.use(express.json());

app.use('/api/user', userRoutes);
// app.use('/api/notes', noteRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Hello world' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
