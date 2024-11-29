const express= require('express');
const router = express.Router();


const {
    getAllPlantProfiles,
    getPlantProfile,
} = require('../controllers/plantProfiles');

router.get('/', getAllPlantProfiles);
router.get('/:id', getPlantProfile)



module.exports = router;