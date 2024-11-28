const mongoose = require('mongoose');

const SupervisorSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Supervisor', SupervisorSchema);
