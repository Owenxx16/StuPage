import React, { useEffect, useState } from "react";
import axios from "axios";
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
    // Fetch dữ liệu chung
    fetch("https://stupage.onrender.com/news")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dữ liệu tin tức:", data);
        if (Array.isArray(data.data)) {
          // Lọc dữ liệu theo từng category_id
          const filteredTuyensinh = data.data.filter(event => event.category_id === 17);
          const filteredHuongnghiep = data.data.filter(event => event.category_id === 16);
          const filteredSinhvien = data.data.filter(event => event.category_id === 18);
          const filteredHocthi = data.data.filter(event => event.category_id === 7);
          const sortedNews = data.data.sort((a, b) => b.id - a.id); // Sắp xếp tin tức chung

          // Cập nhật trạng thái
          setNews(sortedNews);
          setTuyensinh(filteredTuyensinh);
          setHuongnghiep(filteredHuongnghiep);
          setSinhvien(filteredSinhvien);
          setHocthi(filteredHocthi);
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
          {/* Tuyển Sinh */}
          <div className="content-column">
            <div className="content-title">
              <img src="../../src/assets/icon-mortarboard.png" alt="icon" />
              <span className="red">Tuyển Sinh STU</span>
            </div>
            {tuyensinh.length > 0 ? (
              <>
                <img src={tuyensinh[0].image_title}
        alt={tuyensinh[0].title} className="main-image" />
                <div className="main-article">
                  <a href={`/bai-viet-${tuyensinh[0].id}`}>{tuyensinh[0].title}</a>
                  <p>{new Date(tuyensinh[0].created_at).toLocaleDateString()}</p>
                  <a href={`/bai-viet-${tuyensinh[0].id}`} className="detail-link">Chi tiết ►</a>
                </div>
                <ul className="sub-articles">
                  {tuyensinh.slice(1, 3).map(item => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              </>
            ) : <p>Đang tải...</p>}
            <div className="see-all-container">
              <SeeAllButton onClick={() => window.location.href = "/news"} />
            </div>
          </div>

          {/* Hướng Nghiệp */}
          <div className="content-column">
            <div className="content-title">
              <img src="../../src/assets/icon-career.png" alt="icon" />
              <span className="red">Hướng Nghiệp</span>
            </div>
            {huongnghiep.length > 0 ? (
              <>
                <img src={huongnghiep[0].image_title}
        alt={huongnghiep[0].title} className="main-image" />
                <div className="main-article">
                  <a href={`/bai-viet-${huongnghiep[0].id}`}>{huongnghiep[0].title}</a>
                  <p>{new Date(huongnghiep[0].created_at).toLocaleDateString()}</p>
                  <a href={`/bai-viet-${huongnghiep[0].id}`} className="detail-link">Chi tiết ►</a>
                </div>
                <ul className="sub-articles">
                  {huongnghiep.slice(1, 3).map(item => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              </>
            ) : <p>Đang tải...</p>}
            <div className="see-all-container">
              <SeeAllButton onClick={() => window.location.href = "/news"} />
            </div>
          </div>
        </div>

        <div className="content-columns">
          {/* Sinh Viên */}
          <div className="content-column">
            <div className="content-title">
              <img src="../../src/assets/sinhvien.png" alt="icon" />
              <span className="red">Sinh Viên STU</span>
            </div>
            {sinhvien.length > 0 ? (
              <>
                <img src={sinhvien[0].image_title}
        alt={sinhvien[0].title} className="main-image" />
                <div className="main-article">
                  <a href={`/bai-viet-${sinhvien[0].id}`}>{sinhvien[0].title}</a>
                  <p>{new Date(sinhvien[0].created_at).toLocaleDateString()}</p>
                  <a href={`/bai-viet-${sinhvien[0].id}`} className="detail-link">Chi tiết ►</a>
                </div>
                <ul className="sub-articles">
                  {sinhvien.slice(1, 3).map(item => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              </>
            ) : <p>Đang tải...</p>}
            <div className="see-all-container">
              <SeeAllButton onClick={() => window.location.href = "/news"} />
            </div>
          </div>

          {/* Học Thi */}
          <div className="content-column">
            <div className="content-title">
              <img src="../../src/assets/hoc-thi-tuyensinh.png" alt="icon" />
              <span className="red">Học - Thi - Tuyển Sinh</span>
            </div>
            {hocthi.length > 0 ? (
              <>
                <img src={hocthi[0].image_title}
        alt={hocthi[0].title} className="main-image" />
                <div className="main-article">
                  <a href={`/bai-viet-${hocthi[0].id}`}>{hocthi[0].title}</a>
                  <p>{new Date(hocthi[0].created_at).toLocaleDateString()}</p>
                  <a href={`/bai-viet-${hocthi[0].id}`} className="detail-link">Chi tiết ►</a>
                </div>
                <ul className="sub-articles">
                  {hocthi.slice(1, 3).map(item => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              </>
            ) : <p>Đang tải...</p>}
            <div className="see-all-container">
              <SeeAllButton onClick={() => window.location.href = "/news"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentPage;
