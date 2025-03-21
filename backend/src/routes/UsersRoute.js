const express = require('express');
const { createUser, getUser, updateUser } = require('../controller/UsersController');
const router = express.Router();

router.get('/:id', getUser);
router.post('/resgister', createUser);
router.put('/updateUser/:id', updateUser);

module.exports = router;