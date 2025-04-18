import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContentRightPage from "../../components/content/contentRight";
import './NewsList.css'

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://stupage.onrender.com/news");
        const result = await response.json();

        if (result.status === 200) {
          setNewsList(result.data);
        } else {
          console.error("Lỗi khi tải danh sách bài viết.");
        }
      } catch (error) {
        console.error("Lỗi kết nối API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Đang tải danh sách bài viết...</p>;

  return (
    <div className="content-container">
      <div className="left-column">
        <div className="news-main">
        <div className="news-header">
          <img src="../../src/assets/news.png" alt="news-icon" className="news-icon" />
          <span className="news-title read-more">Tin Tức STU</span>
        </div>
          {newsList.map((news) => {
            const imageUrl = news.image_title?.startsWith("http")
              ? news.image_title
              : `https://stupage.onrender.com/${news.image_title}`;
              
            const content = news.content_details?.[0]?.content?.replace(/<[^>]*>/g, "") || "Không có nội dung mô tả.";

            return (
              <div key={news.id} className="news-card">
                <img
                  src={imageUrl || "https://via.placeholder.com/250x150?text=STU"}
                  alt={news.title}
                  className="news-image"
                />
                <div className="news-content">
                  <p className="news-date">📅 {new Date(news.created_at).toLocaleDateString()}</p>
                  <h3 className="news-title">
                    <Link to={`/news/${news.id}`}>{news.title}</Link>
                  </h3>
                  <p className="news-snippet">{content.slice(0, 150)}...</p>
                  <Link to={`/news/${news.id}`} className="read-more">Chi tiết »</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right-column">
        <ContentRightPage />
      </div>
    </div>
  );
};

export default NewsList;
