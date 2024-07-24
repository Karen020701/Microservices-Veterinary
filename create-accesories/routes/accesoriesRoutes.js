const express = require('express');
const router = express.Router();
const accesoriesController = require('../controllers/accesoriesController');

router.post('/accesories', accesoriesController.createAccesories );
router.delete('/accesories/:id', accesoriesController.deleteAccesories);
module.exports = router;