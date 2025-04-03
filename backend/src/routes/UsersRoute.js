const express = require('express');
const { createUser, getUser, updateUser, login, logout, refreshToken } = require('../controller/UsersController');
const { authenticateToken } = require('../Middleware/Authencation');
const router = express.Router();

router.get('/', authenticateToken, getUser);
router.post('/register', createUser);
router.put('/updateUser/', authenticateToken, updateUser);
router.post('/refresh-token', refreshToken);
router.post('/login', login)
router.post('/logout', logout)
module.exports = router;