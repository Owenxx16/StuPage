import React, { useState, useEffect } from "react";
import axios from "../../axiosInstance";
import Cookies from "js-cookie";
import "./UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [editingId, setEditingId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchUsers();
  }, []);

  const getAuthHeaders = () => {
    const token = Cookies.get("token"); 
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://stupage.onrender.com/user", getAuthHeaders());
      const user = res.data.data;
      setUsers(user ? [user] : []);
    } catch (err) {
      console.error("Lỗi khi lấy danh sách người dùng:", err);
      setUsers([]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({ username: "", email: "", password: "" });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        console.log(">>>check ")
        await axios.put("https://stupage.onrender.com/user/updateUser", formData, getAuthHeaders());
      } else {
        await axios.post("https://stupage.onrender.com/user/register", formData);
      }
      handleClear();
      fetchUsers();
    } catch (err) {
      console.error("Lỗi khi gửi dữ liệu:", err);
    }
  };

  const handleEdit = (user) => {
    setFormData({ username: user.username, email: user.email, password: "" });
    setEditingId(user.id);
  };

  // Pagination logic
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentUsers = users.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="admin-container">
      <h2 style={{ textAlign: "center", padding: "10px 10px 50px 10px" }}>
        Quản lý Người dùng
      </h2>

      <div className="admin-form_container">
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            name="username"
            placeholder="Tên người dùng"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email người dùng"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">{editingId ? "Cập nhật" : "Thêm mới"}</button>
        </form>

        <button className="btn_refresh" type="button" onClick={handleClear}>
          Nhập lại
        </button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Sửa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={page === currentPage ? "active" : ""}
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

export default UserManagement;
