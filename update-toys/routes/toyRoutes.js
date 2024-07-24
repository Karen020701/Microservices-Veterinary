const express = require('express');
const router = express.Router();
const toyController = require('../controllers/toyController');

router.put('/toys/:id', toyController.updateToy);

module.exports = router;
