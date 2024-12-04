plantProfiles = require('../models/plantProfiles');
resJson = require('../models/resJson');

const getAllPlantProfiles = async (req, res, next) => {
    try {
        const [allPlantProfiles, _] = await plantProfiles.getAll();
        res.status(200).json(new resJson('All plant profiles found', allPlantProfiles));
    } catch (error) {
        res.json(new resJson('Error: ' + error, null));
    }
    next();
}

const getPlantProfile = async (req, res, next) => {
    try {
        const [plantProfile, _] = await plantProfiles.getByID(req.params.id);

        if (plantProfile.length === 0) {
            res.status(404).json(new resJson('Plant profile not found', null));
            return;
        }

        res.status(200).json(new resJson('Plant profile found', plantProfile));
    } catch (error) {
        res.json(new resJson('Error: ' + error, null));
    }
    next();
}

module.exports = { getAllPlantProfiles, getPlantProfile };