const express = require('express');
const router = express.Router();
const medicinesController = require('../controllers/medicinesController');

router.post('/medicines', medicinesController.createMedicines );
router.delete('/medicines/:id', medicinesController.deleteMedicines);
module.exports = router;