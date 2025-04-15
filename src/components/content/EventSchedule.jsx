import React, { useEffect, useState } from "react";
import "./EventSchedule.css";
import SeeAllButton from "../UI/SeeAllButton";

const EventSchedule = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatVietnameseDate = (dateString) => {
    const date = new Date(dateString);
    const days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    const weekday = days[date.getDay()];
    return `${weekday}, ${date.toLocaleDateString("vi-VN")}`;
  };

  useEffect(() => {
    fetch("https://stupage.onrender.com/news")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dữ liệu sự kiện:", data);
        if (Array.isArray(data.data)) {
          // Lọc các sự kiện có category_id là 10
          const filteredEvents = data.data.filter(event => event.category_id === 10);
          setEvents(filteredEvents); // Cập nhật lại danh sách sự kiện sau khi lọc
        } else {
          console.error("Dữ liệu không đúng định dạng:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API sự kiện:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="event-schedule">
      <div className="event-header">
        <div className="icon-box">
          <img
            src="../../src/assets/schedule_icon.png"
            alt="news-icon"
            className="news-icon"
          />
        </div>
        <h3 className="event-title">Lịch Sự Kiện</h3>
      </div>

      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <ul className="event-list">
          {events.length > 0 ? (
            events.map((item) => (
              <li key={item.id} className="event-item">
                <div className="event-date-box">
                <div className="event-date">{formatVietnameseDate(item.created_at) || "Ngày chưa cập nhật"}</div>
                </div>
                <div className="event-description">{item.title || "Thông tin sự kiện chưa có"}</div>
              </li>
            ))
          ) : (
            <li>Không có sự kiện nào cho loại này.</li>
          )}
        </ul>
      )}

      <div className="see-all-container">
        <SeeAllButton onClick={() => (window.location.href = "/news")} />
      </div>
    </div>
  );
};

export default EventSchedule;
