const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// REGISTER LOGIC
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Create and Save New User
    user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Server Error during registration" });
  }
};

// LOGIN LOGIC
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // User irukkiraara endru check seiya
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Email or Password" });

    // Password correct-ah endru match seiya
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Email or Password" });

    // JWT Token create seiya (Secret key: 'gym_secret_123')
    const token = jwt.sign({ id: user._id }, 'gym_secret_123', { expiresIn: '1d' });
    
    res.json({ 
      token, 
      user: { name: user.name, email: user.email },
      message: "Login Successful"
    });

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server Error during login" });
  }
};