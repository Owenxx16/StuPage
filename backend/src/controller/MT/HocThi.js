const connection = require('../../config/database');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/public/assets'); // đảm bảo folder này tồn tại
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Lấy tất cả bản ghi
const getAllHocthiController = async (req, res) => {
  try {
    const [rows] = await connection.execute('SELECT * FROM hocthi ORDER BY updated_at DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy 1 bản ghi theo id
const getHocthiByIdController = async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await connection.execute('SELECT * FROM hocthi WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Không tìm thấy bản ghi nào' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tạo mới bản ghi
const createHocthiController = async (req, res) => {
  const { content, description, link } = req.body;
  // Nếu sử dụng upload file thì có thể lấy image từ req.file.filename, ở đây giả sử nhận từ req.body.image
  const image = req.file ? req.file.filename : null;
  const updated_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
  // Kiểm tra các trường bắt buộc
  if (!content || !description) {
    return res.status(400).json({ message: 'Thiếu các trường bắt buộc: content, description' });
  }
  
  try {
    const [result] = await connection.execute(
      'INSERT INTO hocthi (updated_at, content, image, description, link) VALUES (?, ?, ?, ?, ?)',
      [updated_at, content, image, description, link]
    );
    res.json({ success: true, message: 'Insert thành công', id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật bản ghi theo id
const updateHocthiController = async (req, res) => {
  const id = req.params.id;
  const { content, description, link } = req.body;
  const image = req.file.filename || null;
  const updated_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
  
  try {
    const [result] = await connection.execute(
      'UPDATE hocthi SET updated_at = ?, content = ?, image = ?, description = ?, link = ? WHERE id = ?',
      [updated_at, content, image, description, link, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Không tìm thấy bản ghi để cập nhật' });
    }
    res.json({ success: true, message: 'Cập nhật thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa bản ghi theo id
const deleteHocthiController = async (req, res) => {
  const id = req.params.id;
  
  try {
    const [result] = await connection.execute(
      'DELETE FROM hocthi WHERE id = ?',
      [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Không tìm thấy bản ghi để xóa' });
    }
    res.json({ success: true, message: 'Xóa thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllHocthiByCategoryId = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const [rows] = await connection.execute('SELECT * FROM hocthi WHERE category_id = ?', [categoryId]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllHocthiController,
  getHocthiByIdController,
  createHocthiController,
  updateHocthiController,
  deleteHocthiController,
  upload,
  getAllHocthiByCategoryId
};