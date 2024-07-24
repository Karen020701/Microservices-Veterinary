const Food = require('../models/foodModel');



const getFood = async (req, res) => {
  try {
    const result = await Food.getAll();
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getFoodById = async (req, res) => {
  try {
    const result = await Food.getById(req.params.id);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  getFood,
  getFoodById
};
