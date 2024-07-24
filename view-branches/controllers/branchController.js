const Branch = require('../models/branchModel');

const viewBranches = async (req, res) => {
  try {
    const result = await Branch.getAll();
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  viewBranches
};
