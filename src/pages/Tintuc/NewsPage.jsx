import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./NewsPage.css";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search") || "";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("https://stupage.onrender.com/news");
        console.log(res.data.data);
        const filtered = res.data.data.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setNews(filtered);
      } catch (err) {
        console.error("Lỗi khi tải tin tức:", err);
      }
    };

    fetchNews();
  }, [searchTerm]);

  return (
    <div className="news-page-container">
      <h2 className="search-title">
        <FontAwesomeIcon icon={faClock} style={{ marginRight: 8 }} />
        Kết quả tìm kiếm từ khóa: <span style={{ color: "red" }}>{searchTerm}</span>
      </h2>

      {news.map((item) => {
        const imageUrl = item.image_title?.startsWith("http")
          ? item.image_title
          : `https://stupage.onrender.com/${item.image_title?.replace(/^\/+/, "")}`;

        return (
          <div className="news-item" key={item.id}>
            <div className="news-left">
              <img src={imageUrl} alt="news" className="news-thumbnail" />
            </div>

            <div className="news-right">
              <div className="news-meta">
                <FontAwesomeIcon icon={faClock} className="clock-icon" />
                <span className="news-date">
                  ({new Date(item.created_at || item.updated_at || Date.now())
                    .toLocaleDateString("en-US", {
                      month: "numeric",
                      day: "numeric",
                      year: "numeric",
                    })
                    .replace(/\//g, ".")})
                </span>
              </div>

              <Link to={`/news/${item.id}`} className="news-title">
                {item.title}
              </Link>

              <Link to={`/news/${item.id}`} className="news-detail-link">
                Chi tiết <span style={{ color: "red" }}>▶</span>
              </Link>
            </div>
          </div>
        );
      })}

      {news.length === 0 && (
        <p className="no-result">Không tìm thấy kết quả nào phù hợp với từ khóa.</p>
      )}
    </div>
  );
};

export default NewsPage;
