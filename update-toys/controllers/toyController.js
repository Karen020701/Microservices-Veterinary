const Toy = require('../models/toyModel');

const updateToy = async (req, res) => {
  try {
    const result = await Toy.update(req.params.id, req.body);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Toy not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  updateToy
};
