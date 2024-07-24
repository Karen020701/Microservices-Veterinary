const PetFood = require('../models/petFoodModel');

const updatePetFood = async (req, res) => {
  try {
    const result = await PetFood.update(req.params.id, req.body);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Pet food not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  updatePetFood
};
