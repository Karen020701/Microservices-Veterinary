const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branchController');

router.get('/branches', branchController.viewBranches);

module.exports = router;
