const express = require('express');
const router = express.Router();
const toysController = require('../controllers/toysController');

router.post('/toys', toysController.createToys );
router.delete('/toys/:id', toysController.deleteToys);
module.exports = router;