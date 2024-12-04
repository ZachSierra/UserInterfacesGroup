plantProfiles = require('../models/plantProfiles');
resJson = require('../models/resJson');

const getAllPlantProfiles = async (req, res, next) => {
    try {
        const [allPlantProfiles, _] = await plantProfiles.getAll();
        res.status(200).json(new resJson('All plant profiles found', allPlantProfiles));
    } catch (error) {
        res.status(500).json(new resJson('Error: ' + error, null));
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
        res.status(500).json(new resJson('Error: ' + error, null));
    }
    next();
}

const getPlantProfileByName = async (req, res, next) => {
    try {
        const common_Name = req.params.commonName;
        const [plantProfile, _] = await plantProfiles.getByName(common_Name);

        if (plantProfile.length === 0) {
            res.status(404).json(new resJson('Plant profile not found', null));
            return;
        }
        res.status(200).json(new resJson('Plant profiles found', plantProfile));
    } catch (error) {
    }
    next();
}

module.exports = { getAllPlantProfiles, getPlantProfile, getPlantProfileByName };