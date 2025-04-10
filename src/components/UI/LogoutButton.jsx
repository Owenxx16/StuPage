import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Xoá token
    localStorage.removeItem("refreshToken"); // Nếu có
    navigate("/login"); // Chuyển về trang login
  };

  return (
    <button onClick={handleLogout} style={{ padding: "8px 16px", marginTop: 20 }}>
      Đăng xuất
    </button>
  );
};

export default LogoutButton;
