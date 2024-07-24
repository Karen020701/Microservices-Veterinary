const Toys = require('../models/toysModel');

const createToys = async (req, res) => {
  try {
    const result = await Toys.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteToys = async (req, res) => {
  try {
    const result = await Toys.delete(req.params.id);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Toys not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createToys,
  deleteToys
};