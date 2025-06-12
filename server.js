import express from 'express';
import { swaggerUi, swaggerSpec } from './swagger.js';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import noteRoutes from './routes/noteRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Middleware json
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/user', userRoutes);
app.use('/api/notes', noteRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Server live' });
});

app.listen(PORT, () => {
  console.log(`
    Server is running on http://localhost:${PORT}

    Swagger API documentation: http://localhost:${PORT}/api-docs
    
    `);
});

export default app;
