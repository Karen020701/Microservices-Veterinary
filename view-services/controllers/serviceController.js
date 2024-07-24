const Service = require('../models/serviceModel');

const viewServices = async (req, res) => {
  try {
    const result = await Service.getAll();
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  viewServices
};
