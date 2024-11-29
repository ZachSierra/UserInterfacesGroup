const express= require('express');
const router = express.Router();


const {
    getAllUsers,
    getUser,
} = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/:id', getUser)



module.exports = router;