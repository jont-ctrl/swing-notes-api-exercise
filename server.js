import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware json
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello world' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
