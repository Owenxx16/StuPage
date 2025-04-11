import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserManagement.css";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ name: "" });
  const [editingId, setEditingId] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("https://stupage.onrender.com/categories");
      const categoryList = res.data.data;
      setCategories(Array.isArray(categoryList) ? categoryList : []);
    } catch (err) {
      console.error("Lỗi khi lấy danh sách chuyên mục:", err);
      setCategories([]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({ name: "" });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`https://stupage.onrender.com/categories/${editingId}`, formData);
      } else {
        await axios.post("https://stupage.onrender.com/categories", formData);
      }
      handleClear();
      fetchCategories();
    } catch (err) {
      console.error("Lỗi khi gửi dữ liệu chuyên mục:", err);
    }
  };

  const handleEdit = (category) => {
    setFormData({ name: category.name });
    setEditingId(category.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://stupage.onrender.com/categories/${id}`);
      fetchCategories();
    } catch (err) {
      console.error("Lỗi khi xoá chuyên mục:", err);
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentCategories = categories.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="admin-container">
      <h2 style={{ textAlign: "center", padding: "10px 10px 30px 10px" }}>
        Quản lý Chuyên mục
      </h2>

      <div className="admin-form_container">
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            name="name"
            placeholder="Tên chuyên mục"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <button type="submit">{editingId ? "Cập nhật" : "Thêm mới"}</button>
        </form>
        <button className="btn_refresh" onClick={handleClear}>Nhập lại</button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên chuyên mục</th>
            <th>Ngày tạo</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {currentCategories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{new Date(category.created_at).toLocaleString()}</td>
              <td>
                <button onClick={() => handleEdit(category)}>Sửa</button>
                <button onClick={() => handleDelete(category.id)}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CategoryManagement;
