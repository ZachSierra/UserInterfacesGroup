Garden = require('../models/Garden');
resJson = require('../models/resJson');

const createGarden = async (req, res, next) => {
    try{
        const newGarden = new Garden(null, req.body.UserId, req.body.Plant_id);
        const [garden, _] = await newGarden.createGarden();
        res.status(201).json(new resJson('Garden created', garden));
    }
    catch (error){
        res.status(500).json(new resJson('Error: ' + error, null));
    }
    next();
}

const getGarden = async (req, res, next) => {
    try{
        const [garden, _] = await Garden.getGarden(req.params.id);
        res.status(200).json(new resJson('Garden found', garden));
    }
    catch (error){
        res.status(500).json(new resJson('Error: ' + error, null));
    }
    next();
}

const deleteGarden = async (req, res, next) => {
    try{
        const [garden, _] = await Garden.deleteGarden(req.body.UserId, req.body.Plant_id);
        res.status(200).json(new resJson('Garden deleted', garden));
    }
    catch (error){
        res.status(500).json(new resJson('Error: ' + error, null));
    }
    next();
}

module.exports = {createGarden, getGarden, deleteGarden};