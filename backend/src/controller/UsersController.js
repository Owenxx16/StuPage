const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database.js');
const crypto = require('crypto');

const createUser = async (req, res) => {
    const { username, email, password, category_id } = req.body;

    if (!username || !email || !password || !category_id) {
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


// const login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const [user] = await db.execute(
//             `SELECT users.id, users.email, users.password, users.category_id 
//              FROM users 
//              WHERE email = ?`,
//             [email]
//         );

//         if (user.length === 0) {
//             return res.status(404).json({
//                 status: 404,
//                 message: 'User not found',
//                 data: null
//             });
//         }

//         const isMatch = await bcrypt.compare(password, user[0].password);
//         if (!isMatch) {
//             return res.status(401).json({
//                 status: 401,
//                 message: 'Invalid credentials',
//                 data: null
//             });
//         }

//         const token = jwt.sign(
//             { userId: user[0].id, username: user[0].username },
//             process.env.JWT_SECRET,
//             { expiresIn: '1h' }
//         );
//         const refreshToken = crypto.randomBytes(40).toString('hex');
//         await db.execute(
//             'INSERT INTO refresh_tokens (user_id, refresh_token) VALUES (?, ?)',
//             [user[0].id, refreshToken]
//         );
//         res.status(200).json({
//             status: 200,
//             message: 'Login successful',
//             data: { token, refreshToken }
//         });

//     } catch (error) {
//         res.status(500).json({
//             status: 500,
//             message: error.message,
//             data: null
//         });
//     }

// };
const login = async (req, res) => {
    const { email, password } = req.body;

    // Kiểm tra đầu vào
    if (!email || !password) {
        return res.status(400).json({
            status: 400,
            message: 'Email và mật khẩu là bắt buộc',
            data: null
        });
    }

    try {
        // Kiểm tra trong bảng users
        let [userRows] = await db.execute(
            `SELECT id, email, password, category_id 
             FROM users 
             WHERE email = ?`,
            [email]
        );

        let user = userRows[0];
        let isAdmin = false;

        // Nếu không tìm thấy trong bảng users, kiểm tra bảng admin
        if (!user) {
            const [adminRows] = await db.execute(
                `SELECT id, email, password, username 
                 FROM admin 
                 WHERE email = ?`,
                [email]
            );
            user = adminRows[0];
            isAdmin = !!user; // Đánh dấu là admin nếu tìm thấy
        }

        // Nếu không tìm thấy user hoặc admin
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: 'Không tìm thấy người dùng hoặc quản trị viên',
                data: null
            });
        }

        // Kiểm tra mật khẩu
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                status: 401,
                message: 'Thông tin đăng nhập không hợp lệ',
                data: null
            });
        }

        // Tạo JWT
        const tokenExpiresIn = isAdmin ? '2h' : '1h';
        const tokenPayload = isAdmin
            ? { adminId: user.id, username: user.username }
            : { userId: user.id, username: user.username || email }; // Dùng email nếu không có username
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: tokenExpiresIn });

        // Tạo và lưu refresh token
        const refreshToken = crypto.randomBytes(40).toString('hex');
        const refreshTokenQuery = isAdmin
            ? 'INSERT INTO refresh_tokens (admin_id, refresh_token) VALUES (?, ?)'
            : 'INSERT INTO refresh_tokens (user_id, refresh_token) VALUES (?, ?)';
        await db.execute(refreshTokenQuery, [user.id, refreshToken]);

        // Trả về phản hồi
        res.status(200).json({
            status: 200,
            message: `Đăng nhập ${isAdmin ? 'quản trị viên' : 'người dùng'} thành công`,
            data: {
                user,
                token, refreshToken
            }
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
    const { userId } = req.params; // Lấy id từ URL
    const { username, email, password, category_id } = req.body;

    try {
        let hashedPassword = null;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        // Lấy user hiện tại
        const [userRows] = await db.execute('SELECT * FROM users WHERE id = ?', [userId]);
        if (userRows.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'User not found',
                data: null
            });
        }

        // Nếu không truyền password mới, giữ password cũ
        const finalPassword = hashedPassword || userRows[0].password;

        // Update user
        const [result] = await db.execute(
            'UPDATE users SET username = ?, email = ?, password = ?, category_id = ? WHERE id = ?',
            [
                username,
                email,
                finalPassword,
                category_id,
                userId
            ]
        );

        res.status(200).json({
            status: 200,
            message: 'User updated successfully',
            data: { userId, username, email, category_id }
        });
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