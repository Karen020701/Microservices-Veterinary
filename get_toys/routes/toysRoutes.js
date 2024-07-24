const express = require('express');
const router = express.Router();
const toysController = require('../controllers/toysController');


router.get('/toys', toysController.getToys);


router.get('/toys/:id', toysController.getToysById);


module.exports = router;
