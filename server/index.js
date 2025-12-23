const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authController = require('./controllers/authController');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection (Replace with your URI)
mongoose.connect('mongodb+srv://kevi:kevi@cluster0.cex6h0b.mongodb.net/gym')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// API Routes
app.post('/api/register', authController.register);
app.post('/api/login', authController.login);

const PORT = 2525;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));