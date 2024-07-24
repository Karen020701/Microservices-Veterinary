const Medicine = require('../models/medicineModel');

const updateMedicine = async (req, res) => {
  try {
    const result = await Medicine.update(req.params.id, req.body);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Medicine not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  updateMedicine
};
