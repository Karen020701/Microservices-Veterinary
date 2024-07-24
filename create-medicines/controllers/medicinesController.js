const Medicines = require('../models/medicinesModel');

const createMedicines = async (req, res) => {
  try {
    const result = await Medicines.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteMedicines = async (req, res) => {
  try {
    const result = await Medicines.delete(req.params.id);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Medicines not found' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  createMedicines,
  deleteMedicines
};
