const connection = require('../../config/database');

const getAllCategoryNavbar = async (req,res) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM categories_nav');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getCategoryNavbarById = async (req,res) => {
  try {
    const id = req.params.id;
    const [rows] = await connection.execute('SELECT * FROM categories_nav WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateCategoryNavbar = async (req,res) => {
  try {
    const id = req.params.id;
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const [rows] = await connection.execute('UPDATE categories_nav SET name = ? WHERE id = ?', [name, id]);
    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ success: true, message: 'Update thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteCategoryNavbar = async (req,res) => {
  try {
    const id = req.params.id;
    const [rows] = await connection.execute('DELETE FROM categories_nav WHERE id = ?', [id]);
    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ success: true, message: 'Delete thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createCategoryNavbar = async (req,res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const [rows] = await connection.execute('INSERT INTO categories_nav (name) VALUES (?)', [name]);
    res.json({ success: true, message: 'Insert thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


module.exports = { getAllCategoryNavbar, getCategoryNavbarById, updateCategoryNavbar, deleteCategoryNavbar, createCategoryNavbar };