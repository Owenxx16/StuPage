import "./GioiThieu.css"
import "../components/content/content.css"
import React, { useState, useEffect } from "react";

const GioiThieu = () => {

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("https://stupage.onrender.com/news") // đổi URL nếu khác
      .then((res) => res.json())
      .then((resData) => {
        if (resData.status === 200) {
          setNewsList(resData.data);
        }
      })
      .catch((err) => console.error("Lỗi khi fetch tin tức:", err));
  }, []);

  const renderFirstImage = (details) => {
    const img = details.find((item) => item.type === "image");
    return img ? (
      <img
        src={`https://stupage.onrender.com${img.value}`}
        alt="thumbnail"
        style={{ width: "200px", borderRadius: "8px" }}
      />
    ) : null;
  };

  return (
    <div>
      {newsList.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "20px",
            alignItems: "flex-start",
          }}
        >
          <div>{renderFirstImage(item.content_details)}</div>
          <div>
            <h3 style={{ color: "#0056b3" }}>{item.title}</h3>
            <p style={{ fontStyle: "italic", color: "gray" }}>
              {item.category_name} - {item.author}
            </p>
            <p>{item.content}</p>
            <a href={`/news/${item.id}`} style={{ color: "red" }}>
              Chi tiết ►
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};


export default GioiThieu;
