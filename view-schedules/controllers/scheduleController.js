const Schedule = require('../models/scheduleModel');

const getSchedules = async (req, res) => {
  try {
    const result = await Schedule.getAll();
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getSchedules
};
