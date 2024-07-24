const Medicine = require('../models/medicineModel');

const listMedicines = async (req, res) => {
  try {
    const result = await Medicine.getAll();
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  listMedicines
};
