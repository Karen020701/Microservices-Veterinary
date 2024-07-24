const express = require('express');
const router = express.Router();
const petFoodController = require('../controllers/petFoodController');

router.put('/pet-food/:id', petFoodController.updatePetFood);

module.exports = router;
