const express = require('express');
const router = express.Router();
const accessoryController = require('../controllers/accessoryController');

router.put('/accessories/:id', accessoryController.updateAccessory);

module.exports = router;
