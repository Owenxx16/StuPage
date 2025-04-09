import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra email hợp lệ
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email không hợp lệ!");
      return;
    }

    // Kiểm tra mật khẩu không rỗng
    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự!");
      return;
    }

    setError(""); // Xóa lỗi nếu nhập đúng
    alert("Đăng nhập thành công!");
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Mật khẩu:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={!email || !password}>
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
