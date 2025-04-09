import React from "react";
import "./EventSchedule.css";
import SeeAllButton from "../UI/SeeAllButton";

const events = [
  { date: "03/04/2025", day: "Thứ 5", title: "Tư vấn trực tuyến khối ngành IT-Thiết kế-Kinh tế" },
  { date: "27/03/2025", day: "Thứ 5", title: "Tư vấn trực tuyến khối ngành Kỹ thuật công nghệ" },
  { date: "12/03/2025", day: "Thứ 4", title: "Lễ ký kết hợp tác giữa Trường Đại học Công nghệ Sài..." },
  { date: "01/03/2025", day: "Thứ 7", title: "Chương trình trải nghiệm \"Một ngày làm sinh viên STU\"" },
  { date: "22/02/2025", day: "Thứ 7", title: "Giải Cờ tướng Nam Khối thi đua 21 năm học 2024 -2025" },
  { date: "13/02/2025", day: "Thứ 5", title: "Lễ ký kết hợp tác giữa STU và Báo Thanh Niên" },
  { date: "10/01/2025", day: "Thứ 6", title: "Triển lãm Designation Festival 2025" },
  { date: "05/01/2025", day: "Chủ Nhật", title: "STU tham gia ngày hội tư vấn tuyển sinh “Cùng bạn quyết..." },
];

const EventSchedule = () => {
  return (
    <div className="event-schedule">
      <div className="event-header">
        <div className="icon-box">
            <img src="../../src/assets/schedule_icon.png" alt="news-icon" className="news-icon" />
        </div>
        <h3 className="event-title">Lịch Sự Kiện</h3>
      </div>

      <ul className="event-list">
        {events.map((item, index) => (
          <li key={index} className="event-item">
            <div className="event-date-box">
              <div className="event-day">{item.day}</div>
              <div className="event-date">{item.date}</div>
            </div>
            <div className="event-description">{item.title}</div>
          </li>
        ))}
      </ul>
        <div className="see-all-container">
                         <SeeAllButton onClick={() => window.location.href = "/news"} />
        </div>
    </div>
  );
};

export default EventSchedule;
