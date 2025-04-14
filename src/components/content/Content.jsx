import React, { useEffect, useState } from "react";
import SeeAllButton from "../UI/SeeAllButton";
import NewsItem from "./newsItem";

const ContentPage = () => {
  const [news, setNews] = useState([]);
  const [tuyensinh, setTuyensinh] = useState([]);
  const [huongnghiep, setHuongnghiep] = useState([]);
  const [sinhvien, setSinhvien] = useState([]);
  const [hocthi, setHocthi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://stupage.onrender.com/news")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          const sortByNewest = (arr) =>
            [...arr].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

          setNews(sortByNewest(data.data));
          setTuyensinh(sortByNewest(data.data.filter(event => event.category_id === 17)));
          setHuongnghiep(sortByNewest(data.data.filter(event => event.category_id === 16)));
          setSinhvien(sortByNewest(data.data.filter(event => event.category_id === 18)));
          setHocthi(sortByNewest(data.data.filter(event => event.category_id === 7)));
        } else {
          console.error("Dữ liệu không đúng định dạng:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API tin tức:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Đang tải...</p>;
  }

  const renderCategory = (title, icon, data) => (
    <div className="content-column">
      <div className="content-title">
        <img src={icon} alt="icon" />
        <span className="red">{title}</span>
      </div>
      {data.length > 0 ? (
        <>
          <img src={data[0].image_title} alt={data[0].title} className="main-image" />
          <div className="main-article">
            <a href={`/bai-viet-${data[0].id}`}>{data[0].title}</a>
            <p>{new Date(data[0].created_at).toLocaleDateString()}</p>
            <a href={`/bai-viet-${data[0].id}`} className="detail-link">
              Chi tiết ►
            </a>
          </div>
          <ul className="sub-articles">
            {data.slice(1, 3).map((item) => (
              <li key={item.id}>
                <a href={`/bai-viet-${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Đang tải...</p>
      )}
      <div className="see-all-container">
        <SeeAllButton onClick={() => window.location.href = "/news"} />
      </div>
    </div>
  );

  return (
    <>
      {/* Tin tức chính */}
      <div className="news-container">
        <div className="news-header">
          <img src="../../src/assets/news.png" alt="news-icon" className="news-icon" />
          <span className="news-title read-more">Tin Tức STU</span>
        </div>
        {news.length === 0 ? (
          <p style={{ margin: "10px" }}>Đang tải tin tức...</p>
        ) : (
          <div className="news-list">
            {news.slice(0, 5).map((item, index) => (
              <NewsItem key={item.id} item={item} isFirst={index === 0} />
            ))}
          </div>
        )}
        <div className="see-all-container">
          <SeeAllButton onClick={() => window.location.href = "/news"} />
        </div>
      </div>

      {/* Các chuyên mục */}
      <div className="content-block">
        <div className="content-columns">
          {renderCategory("Tuyển Sinh STU", "../../src/assets/icon-mortarboard.png", tuyensinh)}
          {renderCategory("Hướng Nghiệp", "../../src/assets/icon-career.png", huongnghiep)}
        </div>
        <div className="content-columns">
          {renderCategory("Sinh Viên STU", "../../src/assets/sinhvien.png", sinhvien)}
          {renderCategory("Học - Thi - Tuyển Sinh", "../../src/assets/hoc-thi-tuyensinh.png", hocthi)}
        </div>
      </div>
    </>
  );
};

export default ContentPage;
