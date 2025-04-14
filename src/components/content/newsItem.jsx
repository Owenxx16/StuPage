import React from "react";
import './content.css';

const NewsItem = ({ item, isFirst }) => {
    const imageUrl = item.image_title?.startsWith("http")
        ? item.image_title
        : `https://stupage.onrender.com/${item.image_title?.replace(/^\/+/, '')}`;

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('vi-VN', options);
    };

    return (
        <div className={`news-item ${isFirst ? "first-item" : ""}`}>
            {isFirst && item.image_title && (
                <img src={imageUrl} alt="news" className="news-image" />
            )}

            <div className="news-content">
                <h2 className="news-title">
                    <strong>{item.title}</strong> ({formatDate(item.created_at)})
                    {isFirst && <span className="new-badge">mới</span>}
                </h2>
                    <p className="news-description">
                        {/* Mô tả tóm tắt hoặc nội dung chi tiết có thể thêm vào sau */}
                        <a href={`/news/${item.id}`} className="read-more">Chi tiết &raquo;</a>
                    </p>
            </div>
        </div>
    );
};

export default NewsItem;
