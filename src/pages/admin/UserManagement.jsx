import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ username: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/users/${editingId}`, formData, getAuthHeaders());
      } else {
        await axios.post("http://localhost:5000/api/users", formData, getAuthHeaders());
      }
      setFormData({ username: "", email: "" });
      setEditingId(null);
      fetchUsers();
    } catch (err) {
      console.error("Lỗi khi gửi dữ liệu:", err);
    }
  };

  const handleEdit = (user) => {
    setFormData({ username: user.username, email: user.email });
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`, getAuthHeaders());
      fetchUsers();
    } catch (err) {
      console.error("Lỗi khi xoá người dùng:", err);
    }
  };

  return (
    <div className="admin-container">
      <h2>Quản lý Người dùng</h2>
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
        <button type="submit">{editingId ? "Cập nhật" : "Thêm mới"}</button>
      </form>

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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Sửa</button>
                <button onClick={() => handleDelete(user.id)}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
