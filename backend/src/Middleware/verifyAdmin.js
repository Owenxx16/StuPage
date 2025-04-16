const jwt = require("jsonwebtoken");
const { sendError } = require("../utils/response");

const verifyAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return sendError(res, "Access denied. No token provided", 403);
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded; // chứa adminId, username
        next();
    } catch (error) {
        return sendError(res, "Invalid token", 403);
    }
};

module.exports = verifyAdmin;