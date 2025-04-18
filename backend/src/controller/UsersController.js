const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database.js');
const crypto = require('crypto');

const createUser = async (req, res) => {
    const { username, email, password, category_id } = req.body;

    if (!username || !email || !password || !pbId) {
        return res.status(400).json({
            status: 400,
            message: 'All fields are required',
            data: null
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await db.execute(
            'INSERT INTO users (username, email, password, category_id) VALUES (?, ?, ?, ?)',
            [username, email, hashedPassword, category_id]
        );

        const data = {
            id: result.insertId,
            username: username,
            email: email,
            category_id: category_id
        };

        res.status(201).json({
            status: 201,
            message: 'resgister successful',
            data
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};


const getallusers = async (req, res) => {
    try {
        const [result] = await db.execute(
            'SELECT * FROM users'
        );

        if (result.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'No users found',
                data: null
            });
        }

        res.status(200).json({
            status: 200,
            message: 'Users found',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [user] = await db.execute(
            `SELECT users.id, users.email, users.password, users.category_id, phongban.namepb as department 
             FROM users 
             WHERE email = ?`,
            [email]
        );

        if (user.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'User not found',
                data: null
            });
        }

        const isMatch = await bcrypt.compare(password, user[0].password);
        if (!isMatch) {
            return res.status(401).json({
                status: 401,
                message: 'Invalid credentials',
                data: null
            });
        }

        const token = jwt.sign(
            { userId: user[0].id, username: user[0].username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        const refreshToken = crypto.randomBytes(40).toString('hex');
        await db.execute(
            'INSERT INTO refresh_tokens (user_id, refresh_token) VALUES (?, ?)',
            [user[0].id, refreshToken]
        );
        res.status(200).json({
            status: 200,
            message: 'Login successful',
            data: { token, refreshToken }
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }

};

const refreshToken = async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(400).json({
            status: 400,
            message: 'Refresh token is required',
            data: null
        });
    }

    try {
        const [result] = await db.execute(
            'SELECT user_id FROM refresh_tokens WHERE refresh_token = ?',
            [refreshToken]
        );

        if (result.length === 0) {
            return res.status(403).json({
                status: 403,
                message: 'Invalid refresh token',
                data: null
            });
        }

        const userId = result[0].user_id;

        const newToken = jwt.sign(
            { userId },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            status: 200,
            message: 'New token generated successfully',
            data: { token: newToken }
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};

const logout = async (req, res) => {

    res.status(200).json({
        status: 200,
        message: 'Logout successful',
        data: null
    });
};

const getUser = async (req, res) => {
    const userId = req.user.userId;

    try {
        const [result] = await db.execute(
            'SELECT id, username, email FROM users WHERE id = ?',
            [userId]
        );

        if (result.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'User not found',
                data: null
            });
        }

        res.status(200).json({
            status: 200,
            message: 'User found',
            data: result[0]
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};


const updateUser = async (req, res) => {
    const userId = req.user.userId;
    const { username, email, password } = req.body;

    try {
        let hashedPassword = null;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        const [result] = await db.execute(
            'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',
            [
                username,
                email,
                hashedPassword || db.raw('password'),
                userId
            ]
        );

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'User updated successfully',
                data: { id: userId, username, email }
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'User not found',
                data: null
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};



module.exports = {
    createUser,
    updateUser,
    getUser,
    login,
    logout,
    refreshToken,
    getallusers
};