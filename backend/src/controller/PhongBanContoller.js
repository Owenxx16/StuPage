const db = require('../config/database');
const { sendSuccess, sendError } = require('../utils/response');

const getAllPhongban = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM phongban');
        if (rows.length === 0) {
            return sendError(res, 'No phongban found', 404);
        }
        sendSuccess(res, 'Phongban fetched successfully', rows);
    } catch (error) {
        sendError(res, error.message);
    }
};

const getPhongbanById = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await db.execute('SELECT * FROM phongban WHERE id = ?', [id]);
        if (rows.length === 0) {
            return sendError(res, 'Phongban not found', 404);
        }
        sendSuccess(res, 'Phongban fetched successfully', rows[0]);
    } catch (error) {
        sendError(res, error.message);
    }
};

const createPhongban = async (req, res) => {
    const { namepb } = req.body;
    if (!namepb || !namepb.trim()) {
        return sendError(res, 'Missing or empty field: namepb', 400);
    }
    try {
        const [result] = await db.execute('INSERT INTO phongban (namepb) VALUES (?)', [namepb]);
        const data = { id: result.insertId, namepb };
        sendSuccess(res, 'Phongban created successfully', data);
    } catch (error) {
        sendError(res, error.message);
    }
};

const updatePhongban = async (req, res) => {
    const id = req.params.id;
    const { namepb } = req.body;
    if (!namepb || !namepb.trim()) {
        return sendError(res, 'Missing or empty field: namepb', 400);
    }
    try {
        const [result] = await db.execute('UPDATE phongban SET namepb = ? WHERE id = ?', [namepb, id]);
        if (result.affectedRows === 0) {
            return sendError(res, 'Phongban not found', 404);
        }
        sendSuccess(res, 'Phongban updated successfully', { affectedRows: result.affectedRows });
    } catch (error) {
        sendError(res, error.message);
    }
};

const deletePhongban = async (req, res) => {
    const id = req.params.id;
    try {
        const [result] = await db.execute('DELETE FROM phongban WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return sendError(res, 'Phongban not found', 404);
        }
        sendSuccess(res, 'Phongban deleted successfully', { affectedRows: result.affectedRows });
    } catch (error) {
        sendError(res, error.message);
    }
};

module.exports = {
    getAllPhongban,
    getPhongbanById,
    createPhongban,
    updatePhongban,
    deletePhongban
};