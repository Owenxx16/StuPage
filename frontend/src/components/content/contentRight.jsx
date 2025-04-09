import React from "react";
import "./contentRight.css";
import EventSchedule from "./EventSchedule";

const ContentRightPage = () => {
    const links = [
        { text: "Bản đồ đến STU", color: "#00A99D", url: "/ban-do-den-stu" },
        { text: "Cổng thông tin đào tạo", color: "#0000FF", url: "#" },
        { text: "LMS Hệ Đại Học", color: "#66BB6A", url: "#" },
        { text: "Thông tin công khai", color: "#03A9F4", url: "#" },
        { text: "Tra cứu dữ liệu tốt nghiệp", color: "#C62828", url: "#" },
        { text: "Tra cứu kết quả trúng tuyển", color: "#C2185B", url: "#" },
        { text: "Tuyển sinh thạc sĩ", color: "#E64A19", url: "#" },
        { text: "Tuyển sinh đại học", color: "#C79100", url: "#" },
    ];

    return (
        <div className="right-container">
            <div className="section">
                <div className="section-header">
                    <img src="../../src/assets/icon3.png" alt="icon" className="icon" />
                    <span>Liên Kết Thường Dùng</span>
                </div>
                <ul className="link-list">
                    {links.map((link, index) => (
                        <li key={index} style={{ backgroundColor: link.color }}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="section">
                <div className="section-header">
                    <img src="../../src/assets/icon10.png" alt="icon" className="icon" />
                    <span>Giới Thiệu STU</span>
                </div>
                <div className="video-container">
                <iframe width="270" height="150" src="https://www.youtube.com/embed/3cZTVrK-UWE?si=xazZhUzQPmWYCLUF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            
            <div className="section">
                <EventSchedule/>
            </div>
            
           

        </div>
    );
};

export default ContentRightPage;
