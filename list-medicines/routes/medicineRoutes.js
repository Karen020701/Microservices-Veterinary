const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicineController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Medicine:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the medicine
 *         name:
 *           type: string
 *           description: The name of the medicine
 *         usage:
 *           type: string
 *           description: How to use the medicine
 *         price:
 *           type: number
 *           format: float
 *           description: The price of the medicine
 *         quantity:
 *           type: integer
 *           description: The quantity available
 *       example:
 *         id: 1
 *         name: Aspirin
 *         usage: Pain relief
 *         price: 9.99
 *         quantity: 100
 */

/**
 * @swagger
 * tags:
 *   name: Medicines
 *   description: The medicines managing API
 */

/**
 * @swagger
 * /medicines:
 *   get:
 *     summary: List all medicines
 *     tags: [Medicines]
 *     responses:
 *       200:
 *         description: The list of medicines
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Medicine'
 *       500:
 *         description: Some server error
 */
router.get('/medicines', medicineController.listMedicines);

module.exports = router;
