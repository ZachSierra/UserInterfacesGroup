users = require('../models/users');
resJson = require('../models/resJson');


const getAllUsers = async (req, res) => {
    try {
        const allUsers = await users.getAll();
        res.status(200).json(new resJson(true, 'All users found', allUsers[0]));
    } catch (error) {
        res.json(new resJson(false, 'Error: ' + error, null));
    }
    next();
}
const getUser = async (req, res) => {
    try {
        const user = await users.getByID(req.params.id);
        res.status(200).json(new resJson(true, 'User found', user[0]));
    } catch (error) {
        res.json(new resJson(false, 'Error: ' + error, null));
    }
    next();
}

module.exports = { getAllUsers, getUser };