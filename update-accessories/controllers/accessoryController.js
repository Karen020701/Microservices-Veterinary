const Accessory = require('../models/accessoryModel');

const updateAccessory = async (req, res) => {
  try {
    const result = await Accessory.update(req.params.id, req.body);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Accessory not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  updateAccessory
};
