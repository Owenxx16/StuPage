import React, { useState, useEffect } from "react";
import axios from "axios";
import EditNewsContentForm from "./EditNewsContentForm"; // Đổi từ NewsContentForm
import "./UserManagement.css";

const NewsContentManagement = () => {
  const [newsContent, setNewsContent] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [selectedContentId, setSelectedContentId] = useState(null); // Dùng content ID
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchNewsContent();
    fetchNews();
  }, []);

  const fetchNewsContent = async () => {
    try {
      const res = await axios.get("https://stupage.onrender.com/news_content");
      setNewsContent(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (err) {
      console.error("Lỗi khi lấy nội dung bài viết:", err);
      setNewsContent([]);
    }
  };

  const fetchNews = async () => {
    try {
      const res = await axios.get("https://stupage.onrender.com/news");
      setNewsList(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (err) {
      console.error("Lỗi khi lấy danh sách bài viết:", err);
      setNewsList([]);
    }
  };

  const getNewsTitleById = (id) => {
    const news = newsList.find((n) => n.id === id);
    return news ? news.title : "Không tìm thấy";
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://stupage.onrender.com/news_content/${id}`);
      fetchNewsContent();
    } catch (err) {
      console.error("Lỗi khi xoá nội dung bài viết:", err);
    }
  };

  const handleEdit = (item) => {
    setSelectedContentId(item.id); // Gán ID của content để sửa
  };

  // Pagination
  const totalPages = Math.ceil(newsContent.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = newsContent.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="admin-container">
      <h2 style={{ textAlign: "center", padding: "10px 10px 30px 10px" }}>
        Quản lý Nội dung Bài viết
      </h2>

      {selectedContentId && (
        <div style={{ marginBottom: "30px" }}>
          <EditNewsContentForm
            contentId={selectedContentId}
            onDone={() => {
              setSelectedContentId(null);
              fetchNewsContent(); // Tải lại khi sửa xong
            }}
          />
        </div>
      )}

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Bài Viết</th>
            <th>Nội dung</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{getNewsTitleById(item.news_id)}</td>
              <td>
                <div
                  style={{ maxHeight: "150px", overflowY: "auto" }}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </td>
              <td>
                <button onClick={() => handleEdit(item)}>Sửa</button>
                <button onClick={() => handleDelete(item.id)}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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

export default NewsContentManagement;
