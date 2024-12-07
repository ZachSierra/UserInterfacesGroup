users = require('../models/users');
resJson = require('../models/resJson');


const getAllUsers = async (req, res, next) => {
    try {
        const [allUsers, _] = await users.getAll();
        res.status(200).json(new resJson('All users found', allUsers));
    } catch (error) {
        res.status(500).json(new resJson('Error: ' + error, null));
    }
    next();
}
const getUser = async (req, res, next) => {
    try {
        const [user, _] = await users.getByID(req.params.id);

        if (user.length === 0) {
            res.status(404).json(new resJson('User not found', null));
            return;
        }

        res.status(200).json(new resJson('User found', user));
    } catch (error) {
        res.status(500).json(new resJson('Error: ' + error, null));
    }
    next();
}
const createUser = async (req, res, next) => {
    try {
        const newUser = new users(null, req.body.username, req.body.password, req.body.email, null);
        const [_, __] = await newUser.createUser();
        res.status(201).json(new resJson('User created', null));
    } catch (error) {
        res.status(500).json(new resJson('Error: ' + error, null));
    }
    next();
}

module.exports = { getAllUsers, getUser, createUser };