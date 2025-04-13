import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null: đang kiểm tra
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get("token");
      const refreshToken = Cookies.get("refreshToken");

      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;

        if (decoded.exp < now) {
          // Token hết hạn
          if (!refreshToken) {
            setIsAuthenticated(false);
            return;
          }

          // Gọi API làm mới token
          try {
            const res = await axios.post(
              "https://stupage.onrender.com/api/user/refrest-token",
              {},
              {
                headers: {
                  Authorization: `Bearer ${refreshToken}`,
                },
              }
            );

            Cookies.set("token", res.data.token);
            setIsAuthenticated(true);
          } catch (refreshErr) {
            console.error("Làm mới token thất bại:", refreshErr);
            Cookies.remove("token");
            Cookies.remove("refreshToken");
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(true);
        }
      } catch (err) {
        // Token lỗi hoặc không decode được
        Cookies.remove("token");
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Đang kiểm tra xác thực...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
};

export default PrivateRoute;
