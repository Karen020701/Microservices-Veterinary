const Accesories = require('../models/accesoriesModel');

const createAccesories = async (req, res) => {
  try {
    const result = await Accesories.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteAccesories = async (req, res) => {
  try {
    const result = await Accesories.delete(req.params.id);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Accesories not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createAccesories,
  deleteAccesories
};
