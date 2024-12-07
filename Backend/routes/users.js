const express= require('express');
const router = express.Router();


const {
    getAllUsers,
    getUser,
    createUser
} = require('../controllers/users');
/**
 * @swagger
 * /users:
 *  get:
 *      summary: This api gets all users
 *      description: Get all users
 *      responses:
 *          200:
 *              description: All users found
 *          500:
 *              description: Error
 */
router.get('/', getAllUsers);
/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: This api gets a user by id
 *      description: Get a user by id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: The id of the user
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: User found
 *          404:
 *              description: User not found
 *          500:
 *              description: Error
 */
router.get('/:id', getUser);
/**
 * @swagger
 * /users/:
 *      post:
 *        summary: This api creates a user
 *        description: Create a user
 *        requestBody:
 *        required: true
 *        parameters:
 *          - in: body
 *            name: body
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                  example: Zach
 *                password:
 *                  type: string
 *                  example: password
 *                email:
 *                  type: string
 *                  example: youremail@gmail.com
 *            required:
 *              - username
 *              - password
 *              - email
 *        responses:
 *            201:
 *                description: User created
 *            500:
 *                description: Error
 */
router.post('/', createUser);


module.exports = router;