import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../admin/AdminPage.css';

const AdminPage = () =>{
   return(
    <>
      <div className="admin-container">
         <div className="admin-header">
            <nav className="sidebar">
               <Link to="/adminpage/users">Người dùng</Link>
               <Link to="/adminpage/categories">Danh mục tin tức</Link>
               <Link to="/adminpage/news">Tin tức</Link>
               <Link to="/adminpage/news-content">Nội dung tin tức</Link>
         </nav>
         </div>
        <main className="admin-main">
        <Outlet />
        </main>
      </div>
    </>
   
   );
} 

export default AdminPage;