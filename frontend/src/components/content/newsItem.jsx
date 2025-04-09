import React from "react";
import './content.css';

const NewsItem = ({ item, isFirst }) => {
    const firstImage = item.content_details.find((detail) => detail.type === "image");

    return (
        <div className={`news-item ${isFirst ? "first-item" : ""}`}>
            {/* Chỉ hiển thị ảnh nếu là tin mới nhất */}
            {isFirst && firstImage && <img src={firstImage.value} alt="news" className="news-image" />}
            
            <div className="news-content">
                <h2 className="news-title">
                    <strong>{item.title}</strong> ({item.date}) {isFirst && <span className="new-badge">mới</span>}
                </h2>
                <p className="news-description">
                    {item.content.length > 100 ? item.content.slice(0, 100) + "..." : item.content}
                    <a href={`/news/${item.id}`} className="read-more"> Chi tiết &raquo;</a>
                </p>
            </div>
        </div>
    );
};

export default NewsItem;
