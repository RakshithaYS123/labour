const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../models/admin');
const Supervisor = require('../models/supervisor');

const router = express.Router();

// Admin Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Missing credentials' });
    }

    const admin = await Admin.findOne({ username });
    if (admin && await bcrypt.compare(password, admin.password)) {
      return res.status(200).json({ success: true, role: 'admin', message: 'Login successful' });
    }

    res.status(401).json({ success: false, message: 'Invalid credentials' });
  } catch (err) {
    console.error('Admin login error:', err);
    res.status(500).json({ success: false, message: 'An error occurred during login' });
  }
});

// Add Supervisor
router.post('/add-supervisor', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Missing credentials' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const supervisor = new Supervisor({ username, password: hashedPassword });
    await supervisor.save();

    res.status(201).json({ success: true, message: 'Supervisor added successfully' });
  } catch (err) {
    console.error('Error adding supervisor:', err);
    res.status(500).json({ success: false, message: 'An error occurred while adding supervisor' });
  }
});

module.exports = router;
