const Accesories = require('../models/accesoriesModel');



const getAccesories = async (req, res) => {
  try {
    const result = await Accesories.getAll();
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAccesoriesById = async (req, res) => {
  try {
    const result = await Accesories.getById(req.params.id);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Accesories not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  getAccesories,
  getAccesoriesById
};
