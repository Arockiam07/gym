const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});

// PASSWORD HASHING LOGIC (FIXED)
UserSchema.pre('save', async function() {
  // 1. Password maara villai endral skip seiyavum
  if (!this.isModified('password')) return;

  // 2. Async/Await use pannum pothu 'next' thevaiyillai
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw error; // Error vanthaal Mongoose-ae handle seiyum
  }
});

module.exports = mongoose.model('User', UserSchema);