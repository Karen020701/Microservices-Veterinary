const Veterinary = require('../models/userModel');

const createUser = async (req, res) => {
  try {
    const result = await Veterinary.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createUser
};
