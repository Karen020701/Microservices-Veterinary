const Veterinary = require('../models/veterinaryModel');

const createVeterinary = async (req, res) => {
  try {
    const result = await Veterinary.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getVeterinary = async (req, res) => {
  try {
    const result = await Veterinary.getAll();
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getVeterinaryById = async (req, res) => {
  try {
    const result = await Veterinary.getById(req.params.id);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Veterinary not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  getVeterinary,
  getVeterinaryById,
  createVeterinary
};


