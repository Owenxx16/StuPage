import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../admin/AdminPage.css';

const AdminPage = () =>{
   return(
    <>
         <div className="admin-container">
        <nav className="sidebar">
        <Link to="/adminpage/users">User</Link>
        <Link to="/adminpage/categories">Category</Link>
        <Link to="/adminpage/news">News</Link>
        <Link to="/adminpage/news-content">News Content</Link>
        </nav>
        <main className="admin-main">
        <Outlet />
        </main>
    </div>
    </>
   
   );
} 

export default AdminPage;