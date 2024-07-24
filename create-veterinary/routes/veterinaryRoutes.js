const express = require('express');
const router = express.Router();
const veterinaryController = require('../controllers/veterinaryController');

router.post('/veterinary', veterinaryController.createVeterinary );

router.get('/veterinary', veterinaryController.getVeterinary);

router.get('/veterinary/:id', veterinaryController.getVeterinaryById);

module.exports = router;