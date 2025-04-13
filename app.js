const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

app.use('/api', authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
