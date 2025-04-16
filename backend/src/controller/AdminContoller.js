const db = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { sendSuccess, sendError } = require('../utils/response');
require('dotenv').config();
const createAdmin = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return sendError(res, "All fields (username, email, password) are required", 400);
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await db.execute(
            "INSERT INTO admin (username, email, password) VALUES (?, ?, ?)",
            [username, email, hashedPassword]
        );
        const data = { id: result.insertId, username, email };
        sendSuccess(res, "Admin created successfully", data);
    } catch (error) {
        sendError(res, error.message);
    }
};

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
      return sendError(res, "Email and password are required", 400);
  }
  try {
      const [adminRows] = await db.execute("SELECT * FROM admin WHERE email = ?", [email]);
      if (adminRows.length === 0) {
          return sendError(res, "Admin not found", 404);
      }
      const admin = adminRows[0];
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
          return sendError(res, "Invalid credentials", 401);
      }
      // Tạo JWT cho Admin (hạn token 2h)
      const token = jwt.sign(
          { adminId: admin.id, username: admin.username },
          process.env.JWT_SECRET,
          { expiresIn: '2h' }
      );
      // Tạo refresh token cho admin
      const refreshToken = crypto.randomBytes(40).toString('hex');
      await db.execute(
          "INSERT INTO refresh_tokens (admin_id, refresh_token) VALUES (?, ?)",
          [admin.id, refreshToken]
      );
      sendSuccess(res, "Admin login successful", { token, refreshToken });
  } catch (error) {
      sendError(res, error.message);
  }
};

const refreshAdminToken = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
      return sendError(res, "Refresh token is required", 400);
  }

  try {
      const [result] = await db.execute(
          "SELECT admin_id FROM refresh_tokens WHERE refresh_token = ?",
          [refreshToken]
      );

      if (result.length === 0) {
          return sendError(res, "Invalid refresh token", 403);
      }

      const adminId = result[0].admin_id;

      const newToken = jwt.sign(
          { adminId },
          process.env.JWT_SECRET,
          { expiresIn: '2h' }
      );

      res.status(200).json({
          status: 200,
          message: "New token generated successfully",
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


const adminLogout = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
      return sendError(res, "Refresh token is required", 400);
  }
  try {
      // Xóa token dựa trên refreshToken và admin_id đã lưu (nếu cần thêm điều kiện admin_id)
      await db.execute(
          "DELETE FROM refresh_tokens WHERE refresh_token = ? AND admin_id IS NOT NULL",
          [refreshToken]
      );

      res.status(200).json({
          status: 200,
          message: "Admin logout successful",
          data: null
      });
  } catch (error) {
      res.status(500).json({
          status: 500,
          message: error.message,
          data: null
      });
  }
};


module.exports = { createAdmin, adminLogin,refreshAdminToken, adminLogout  };