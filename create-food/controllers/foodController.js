const Food = require('../models/foodModel');

const createFood = async (req, res) => {
  try {
    const result = await Food.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteFood = async (req, res) => {
  try {
    const result = await Food.delete(req.params.id);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createFood,
  deleteFood
};
