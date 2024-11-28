const express = require('express');
const bcrypt = require('bcrypt');
const Supervisor = require('../models/supervisor');

const router = express.Router();

// Supervisor Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Missing credentials' });
    }

    const supervisor = await Supervisor.findOne({ username });
    if (supervisor && await bcrypt.compare(password, supervisor.password)) {
      return res.status(200).json({ success: true, role: 'supervisor', message: 'Login successful' });
    }

    res.status(401).json({ success: false, message: 'Invalid credentials' });
  } catch (err) {
    console.error('Supervisor login error:', err);
    res.status(500).json({ success: false, message: 'An error occurred during login' });
  }
});

module.exports = router;
