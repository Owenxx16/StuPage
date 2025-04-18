import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './NewsDetail.css'

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await fetch(`https://stupage.onrender.com/news/${id}`);
        const result = await response.json();

        if (result.status === 200) {
          setNews(result.data);
        } else {
          console.error("Không tìm thấy bài viết.");
        }
      } catch (error) {
        console.error("Lỗi khi tải chi tiết bài viết:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (loading) return <p>Đang tải nội dung bài viết...</p>;
  if (!news) return <p>Không tìm thấy bài viết.</p>;

  const imageUrl = news.image_title?.startsWith("http")
    ? news.image_title
    : `https://stupage.onrender.com/${news.image_title}`;

  const contentHTML = news.content_details?.[0]?.content || "<p>Không có nội dung hiển thị.</p>";

  return (
    <div className="news-detail-container">
      <h2 className="news-detail-title">{news.title}</h2>
      <p className="news-detail-date">📅 {new Date(news.created_at).toLocaleDateString()}</p>
      <img src={imageUrl} alt={news.title} className="news-detail-image" />
      <div
        className="news-detail-content"
        dangerouslySetInnerHTML={{ __html: contentHTML }}
      />
    </div>
  );
};

export default NewsDetail;
