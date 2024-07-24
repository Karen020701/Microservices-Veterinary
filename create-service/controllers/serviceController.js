const Service = require('../models/serviceModel');

const createService = async (req, res) => {
  try {
    const result = await Service.create(req.body);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createService
};
