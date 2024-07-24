const express = require('express');
const router = express.Router();
const accesoriesController = require('../controllers/accesoriesController');


router.get('/accesories', accesoriesController.getAccesories);


router.get('/accesories/:id', accesoriesController.getAccesoriesById);


module.exports = router;
