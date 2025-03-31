const db = require('../config/database');

const getallCategories = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM categories');
        res.json({
            status: 200,
            message: 'Categories retrieved successfully',
            data: rows
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};


const getallCategoryById = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM categories where id = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'Categories not found',
                data: null
            });

        }
        res.json({
            status: 200,
            message: 'Categories retrieved successfully',
            data: rows[0]
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};

const createCategories = async (req, res) => {
    try {
        const { name } = req.body;
        const [result] = await db.execute('INSERT INTO categories (name) VALUES (?)', [name]);

        const data = { id: result.insertId, name: name };
        res.status(201).json({
            status: 201,
            message: 'Category created successfully',
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

const updateCategory = async (req, res) => {
    const categoryId = req.params.id;
    const { name } = req.body;

    try {
        const [result] = await db.execute('UPDATE categories SET name = ? WHERE id = ?', [name, categoryId]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Category updated successfully',
                data: { id: categoryId, name: name }
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Category not found',
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

const deleteCategory = async (req, res) => {
    const categoryId = req.params.id;

    try {
        const [result] = await db.execute('DELETE FROM categories WHERE id = ?', [categoryId]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Category deleted successfully',
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'Category not found',
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
    createCategories,
    getallCategoryById,
    updateCategory,
    deleteCategory,
    getallCategories

};