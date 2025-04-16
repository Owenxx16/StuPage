const express = require("express");
const router = express.Router();
const { createAdmin, adminLogin, refreshAdminToken, adminLogout } = require("../controller/AdminContoller");
const verifyAdmin = require("../Middleware/verifyAdmin");
const { createUser,updateUser,getUser,getallusers} = require("../controller/UsersController");
// Đăng ký admin (có thể chỉ dùng cho lần đầu thiết lập)
router.post("/register", createAdmin);

// Đăng nhập admin
router.post("/login", adminLogin);

// Refresh token cho admin
router.post("/refresh-token", refreshAdminToken);

// Logout admin
router.post("/logout", adminLogout);

// Lấy danh sách tất cả người dùng (cần xác thực admin)
router.get("/users", verifyAdmin, getallusers);
// Create user thông qua admin
router.post("/users", verifyAdmin, createUser);
// Update user thông qua admin
router.put("/users/:id", verifyAdmin, updateUser);
// Get user thông qua admin
router.get("/users/:id", verifyAdmin, getUser);

module.exports = router;