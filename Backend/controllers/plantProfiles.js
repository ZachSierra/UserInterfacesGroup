plantProfiles = require('../models/plantProfiles');
resJson = require('../models/resJson');

const getAllPlantProfiles = async (req, res) => {
    try {
        const allPlantProfiles = await plantProfiles.getAll();
        res.status(200).json(new resJson(true, 'All plant profiles found', allPlantProfiles[0]));
    } catch (error) {
        res.json(new resJson(false, 'Error: ' + error, null));
    }
    next();
}

const getPlantProfile = async (req, res) => {
    try {
        const plantProfile = await plantProfiles.getByID(req.params.id);
        res.status(200).json(new resJson(true, 'Plant profile found', plantProfile[0]));
    } catch (error) {
        res.json(new resJson(false, 'Error: ' + error, null));
    }
    next();
}

module.exports = { getAllPlantProfiles, getPlantProfile };