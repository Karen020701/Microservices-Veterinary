const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');


router.get('/food', foodController.getFood);


router.get('/food/:id', foodController.getFoodById);


module.exports = router;
