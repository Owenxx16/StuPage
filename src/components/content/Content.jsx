import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./newsItem";
import { Link } from "react-router-dom";
import "./content.css";
import SeeAllButton from  "../UI/SeeAllButton"
import EventSchedule from "./EventSchedule";

const ContentPage = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await axios.get("https://stupage.onrender.com/news/");
                if (response.data.status === 200) {
                    const sortedNews = response.data.data.sort((a, b) => b.id - a.id); // Sắp xếp theo ID giảm dần
                    setNews(sortedNews);
                }
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu:", error);
            }
        };

        fetchNewsData();
    }, []);

    if (news.length === 0) return <p style={{margin:"10px"}}>Đang tải tin tức...</p>;

    return (
        <>
            <div className="news-container">
                <div className="news-header">
                    <img src="../../src/assets/news.png" alt="news-icon" className="news-icon" />
                    <span className="news-title read-more">Tin Tức STU</span>
                </div>
                <div className="news-list">
                    {news.slice(0, 5).map((item, index) => (
                        <NewsItem key={item.id} item={item} isFirst={index === 0} />
                    ))}
                </div>
                <div className="see-all-container">
                         <SeeAllButton onClick={() => window.location.href = "/news"} />
                </div>
            </div>


            <div className="news-section">
                {/* Tuyển Sinh STU */}
                <div className="news-column">
                    <div className="section-title">
                        <img src="../../src/assets/icon-mortarboard.png" alt="icon"/>
                        Tuyển Sinh STU
                    </div>
                    <img src="../../src/assets/tuyensinh2025.jpg" alt="tuyensinh" className="section-image" />
                    <p><strong className="section-title-header">Tuyển sinh Đại học 2025</strong> (02/01/2025)</p>
                    <a className="read-more-btn" href="#">Chi tiết <span style={{ color: "red" }}>►</span></a>
                    <ul className="news-links">
                        <li>STU tuyển sinh bổ sung 500 chỉ tiêu đại học chính quy (23/08/2024)</li>
                        <li>Công bố điểm chuẩn trúng tuyển đợt 1 và nhập học (20/08/2024)</li>
                    </ul>
                    {/* Nút xem thêm */}
                    <div className="see-all-container">
                         <SeeAllButton onClick={() => window.location.href = "/news"} />
                    </div>
                </div>

                {/* Hướng Nghiệp */}
                <div className="news-column">
                    <div className="section-title">
                        <img src="../../src/assets/icon-career.png" alt="icon"/>
                        Hướng Nghiệp
                    </div>
                    <img src="../../src/assets/huongnghiep.jpg" alt="huongnghiep" className="section-image" />
                    <p><strong className="section-title-header">Tổng quan về ngành Công nghệ thông tin</strong> (18/03/2025) <span className="new-badge">mới</span></p>
                    <p>Công nghệ thông tin (CNTT) là một trong những ngành học phát triển nhanh nhất trong thời đại số... <a href="#" className="read-more-btn">Chi tiết ►</a></p>
                    <ul className="news-links">
                        <li>Đảm bảo chất lượng và An toàn thực phẩm: ngành học đang thiếu nhân lực (31/12/2024)</li>
                        <li>Không phải cứ học Tài chính – Ngân hàng là làm việc ở ngân hàng</li>
                    </ul>
                    <div className="see-all-container">
                         <SeeAllButton onClick={() => window.location.href = "/news"} />
                    </div>
                </div>
            </div>

            <div className="content-block">
            {/* Ảnh đầu tiêu đề */}
            <Link to="/dao-tao-sau-dai-hoc">
                <img
                src="../../src/assets/daotaosaudaihoc.png"
                alt="Đào tạo sau đại học"
                className="section-header-image"
                />
            </Link>

            {/* 2 cột nội dung bên dưới */}
            <div className="content-columns">
                {/* Cột 1 */}
                <div className="content-column">
                <div className="content-title">
                    <img src="../../src/assets/sinhvien.png" alt="icon"/>
                    <span className="red">Sinh Viên STU</span>
                </div>

                <img src="../../src/assets/hoithao.jpg" alt="Hội thao" className="main-image" />
                <div className="main-article">
                    <Link to="/bai-viet-hoi-thao">
                    Thông báo đăng ký tham gia Hội thao Sinh viên Trường ĐH Công nghệ Sài Gòn năm học 2024 - 2025
                    </Link>
                    <p>(03/03/2025)</p>
                    <Link to="/bai-viet-hoi-thao" className="detail-link">Chi tiết ►</Link>
                </div>
                <ul className="sub-articles">
                    <li> STU phối hợp cùng Tuệ Group tổ chức cuộc thi thiết kế bếp...</li>
                    <li> Hai chiến thắng liên tiếp giúp STU khẳng định vị trí...</li>
                </ul>
                <div className="see-all-container">
                         <SeeAllButton onClick={() => window.location.href = "/news"} />
                </div>
                </div>

                {/* Cột 2 tương tự, ví dụ: Tuyển sinh */}
                <div className="content-column">
                <div className="content-title">
                    <img src="../../src/assets/hoc-thi-tuyensinh.png" alt="icon" />
                    <span className="red">Học - Thi - Tuyển sinh</span>
                </div>

                <img src="../../src/assets/quyche.jpg" alt="Quy chế" className="main-image" />
                <div className="main-article">
                    <Link to="/quy-che-tuyen-sinh-2025">
                    Những điểm cần lưu ý trong Quy chế tuyển sinh đại học 2025
                    </Link>
                    <p>(26/03/2025) <span className="new-badge">mới</span></p>
                    <Link to="/quy-che-tuyen-sinh-2025" className="detail-link">Chi tiết ►</Link>
                </div>
                <ul className="sub-articles">
                    <li> Những điểm mới trong Quy chế thi tốt nghiệp THPT từ 2025</li>
                    <li> Đề thi tham khảo Kỳ thi tốt nghiệp THPT 2025</li>
                </ul>
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
