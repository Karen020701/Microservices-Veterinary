const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicineController');

router.put('/medicines/:id', medicineController.updateMedicine);

module.exports = router;
