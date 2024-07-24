const Toys = require('../models/toysModel');



const getToys = async (req, res) => {
  try {
    const result = await Toys.getAll();
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getToysById = async (req, res) => {
  try {
    const result = await Toys.getById(req.params.id);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Toys not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  getToys,
  getToysById
};
