const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.post('/food', foodController.createFood );
router.delete('/food/:id', foodController.deleteFood);
module.exports = router;