const express= require('express');
const router = express.Router();


const {
    getAllPlantProfiles,
    getPlantProfile,
    getPlantProfileByName
} = require('../controllers/plantProfiles');

/**
 * @swagger
 * /plantProfiles:
 *      get:
 *          summary: This api gets all plant profiles
 *          description: Get all plant profiles
 *          responses:
 *              200:
 *                  description: All plant profiles found
 *              500:
 *                  description: Error
 */
router.get('/', getAllPlantProfiles);
/**
 * @swagger
 * /plantProfiles/search/{commonName}:
 *  get:
 *      summary: This api gets a plant profile by name
 *      description: Get a plant profile by name
 *      parameters:
 *        - in: path
 *          name: commonName
 *          required: true
 *          description: The common name of the plant profile
 *          schema:
 *            type: string
 *          example: pothos
 *      responses:
 *        200:
 *          description: Plant profiles found
 *        404:
 *          description: Plant profile not found
 */
router.get('/search/:commonName', getPlantProfileByName);
/**
 * @swagger
 * /plantProfiles/{Plant_id}:
 *  get:
 *      summary: This api gets a plant profile by id
 *      description: Get a plant profile by id
 *      parameters:
 *          - in: path
 *            name: Plant_id
 *            required: true
 *            description: The id of the plant profile
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Plant profile found
 *          404:
 *              description: Plant profile not found
 *          500:
 *              description: Error
 */
router.get('/:id', getPlantProfile);





module.exports = router;