const connection = require('../../config/database');


const getAllNavbar = async (req, res) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM navbar');
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Navbar not found' });
    }
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getNavbarById = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await connection.execute('SELECT * FROM navbar WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Navbar not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getNavbarByCategoryId = async (req, res) => {
  try {
    const navbarId = req.params.navbar;
    const [rows] = await connection.execute('SELECT * FROM navbar WHERE navbar_id = ?', [navbarId]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Navbar not found' });
    }
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateNavbar = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, navbarId } = req.body;
    if (!name || !navbarId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const [rows] = await connection.execute('UPDATE navbar SET name = ?, navbar_id = ? WHERE id = ?', [name, navbarId, id]);
    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: 'Navbar not found' });
    }
    res.json({ success: true, message: 'Update thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteNavbar = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await connection.execute('DELETE FROM navbar WHERE id = ?', [id]);
    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: 'Navbar not found' });
    }
    res.json({ success: true, message: 'Delete thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const createNavbar = async (req, res) => {
  try {
    const { name, navbarId } = req.body;
    if (!name || !navbarId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const [rows] = await connection.execute('INSERT INTO navbar (name, navbar_id) VALUES (?, ?)', [name, navbarId]);
    res.json({ success: true, message: 'Insert thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllNavbar,
  getNavbarById,
  getNavbarByCategoryId,
  updateNavbar,
  deleteNavbar,
  createNavbar
};


