const express= require('express');
const router = express.Router();

const {createGarden, getGarden, deleteGarden} = require('../controllers/Garden');

/**
 * @swagger
 * /garden:
 *      post:
 *        summary: This api creates a garden
 *        description: Create a garden
 *        requestBody:
 *        required: true
 *        parameters:
 *          - in: body
 *            name: body
 *            schema:
 *              type: object
 *              properties:
 *                UserId:
 *                  type: integer
 *                  example: 1
 *                Plant_id:
 *                  type: integer
 *                  example: 2
 *            required:
 *              - UserId
 *              - Plant_id
 *        responses:
 *            201:
 *                description: Garden created
 *            500:
 *                description: Error
 */
router.post('/', createGarden);
/**
 * @swagger
 * /garden/{id}:
 *     get:
 *         summary: This api gets a garden by id
 *         description: Get a garden by id
 *         parameters:
 *           - in: path
 *             name: id
 *             required: true
 *             description: The id of the garden
 *             schema:
 *             type: integer
 *         responses:
 *           200:
 *             description: Garden found
 *           500:
 *             description: Error
 */
router.get('/:id', getGarden);
/**
 * @swagger
 * /garden:
 *     delete:
 *         summary: This api deletes a garden
 *         description: Delete a garden
 *         requestBody:
 *         required: true
 *         parameters:
 *           - in: body
 *             name: body
 *             schema:
 *               type: object
 *               properties:
 *                 UserId:
 *                   type: integer
 *                   example: 1
 *                 Plant_id:
 *                   type: integer
 *                   example: 2
 *               required:
 *                 - UserId
 *                 - Plant_id
 *
 *         content:
 *             application/json:
 *                 schema:
 *                   type: object
 *                 properties:
 *                   UserId:
 *                     type: integer
 *                   Plant_id:
 *                     type: integer
 *                   required:
 *                     - UserId
 *                     - Plant_id
 *         responses:
 *             200:
 *                 description: Garden deleted
 *             500:
 *                 description: Error
 */
router.delete('/', deleteGarden);

module.exports = router;