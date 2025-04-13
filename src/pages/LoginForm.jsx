import React, { useState } from 'react';
import './LoginForm.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://stupage.onrender.com/user/login', {
        email,
        password,
      });

      if (res.data.status === 200) {
        const { token, refreshToken } = res.data.data;

        Cookies.set('token', token, { expires: 1 }); // expires: 1 ngày
        Cookies.set('refreshToken', refreshToken, { expires: 7 }); // expires: 7 ngày

        setMessage('Đăng nhập thành công!');
        navigate('/adminpage');
      } else {
        setMessage('Sai thông tin đăng nhập!');
      }
    } catch (err) {
      setMessage('Lỗi đăng nhập!');
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-title">
        <img src="../../src/assets/icon12.png" alt="icon" />
        <h2>Đăng Nhập</h2>
      </div>
      <div className="login-box">
        <div className="login-left">
          <p className="login-info">
            Bạn cần phải <span className="login-bold">Đăng Nhập</span> để truy cập nội dung
          </p>
          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label>👫 Tài khoản</label>
              <input
                type="email"
                placeholder="Tài Khoản (*)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-field">
              <label>🔐 Mật khẩu</label>
              <input
                type="password"
                placeholder="Mật Khẩu (*)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="login-buttons">
              <button className="btn-login" type="submit">Đăng nhập</button>
              <button className="btn-reset" type="reset">Nhập lại</button>
            </div>
          </form>
          <p className="forgot-password">Quên mật khẩu?</p>
          {message && <p className="login-message">{message}</p>}
        </div>
        <div className="login-right">
          <img src="../../src/assets/login-bg.png" alt="Login Visual" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
