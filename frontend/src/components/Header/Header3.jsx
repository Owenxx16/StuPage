import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header3.css";

const menuItems = [
  { title: "Trang chủ", link: "/" },
  { title: "Giới thiệu", link: "/gioi-thieu" },
  
  {
    title: "Đào tạo",
    subItems: [
      { title: "Biểu đồ giảng dạy & Học tập", link: "/bieu-do-giang-day-va-hoc-tap" },
      { title: "Cẩm nang", link: "/cam-nang" },
      { title: "Chương trình đào tạo", link: "/chuong-trinh-dao-tao" },
    ],
  },
  {
    title: "Tuyển sinh",
    subItems: [
      { title: "Hướng nghiệp", link: "/huong-nghiep" },
      { title: "Thông tin tuyển sinh STU", link: "/thong-tin-tuyen-sinh" },
      { title: "Câu hỏi tư vấn", link: "/cau-hoi-tu-van" },
      { title: "Trắc nghiệm chọn nghề", link: "https://stu.edu.vn/vi/285/trac-nghiem-chon-nghe.html" },
      { title: "Trắc nghiệm IQ", link: "https://stu.edu.vn/vi/286/trac-nghiem-iq.html" },
      { title: "Bản đồ đến STU", link: "/ban-do-den-stu" },
    ],
  },
  {
    title: "Phòng ban",
    subItems: [
      { title: "Phòng Đào tạo", link: "/phong-dao-tao" },
      { title: "Phòng Hành chính Nhân sự Pháp chế", link: "/phong-hc-ns-pc" },
      { title: "Phòng QLKH & SDH", link: "/phong-qlkh-sdh" },
      { title: "Phòng Kế hoạch Tài chính", link: "/phong-kh-tc" },
      { title: "Phòng Công tác Sinh viên", link: "/phong-ct-sv" },
      { title: "Ban Thanh tra", link: "/ban-thanh-tra" },
      { title: "Ban Khoa học cơ bản", link: "/ban-kh-cb" },
      { title: "Ban Đảm bảo Chất lượng Giáo dục", link: "/ban-db-cl-gd" },
    ],
  },
  {
    title: "Khoa",
    subItems: [
      { title: "Khoa Công nghệ Thông tin", link: "/khoa-cn-tt" },
      { title: "Khoa Kỹ thuật Công trình", link: "/khoa-kt-ct" },
      { title: "Khoa Công nghệ Thực phẩm", link: "/khoa-cn-tp" },
      { title: "Khoa Điện - Điện tử", link: "/khoa-dien-dientu" },
      { title: "Khoa Cơ khí", link: "/khoa-co-khi" },
      { title: "Khoa Quản trị kinh doanh", link: "/khoa-qt-kd" },
      { title: "Khoa Design", link: "/khoa-design" },
    ],
  },
  { title: "Trung tâm", link: "http://itpc.edu.vn/" },
  { title: "Thư viện", link: "https://thuvien.stu.edu.vn/" },
  { title: "Liên hệ", link: "/lien-he" },
  {
    title: "Sinh viên",
    subItems: [
      { title: "Đoàn Thanh niên", link: "/doan-thanh-nien" },
      { title: "Cổng Thông tin Đào tạo", link: "http://daotao1.stu.edu.vn/" },
      { title: "Tra cứu Dữ liệu Tốt Nghiệp", link: "http://daotao3.stu.edu.vn/tracuutotnghiep/" },
      { title: "Biểu mẫu", link: "/bieu-mau" },
      { title: "Hướng dẫn", link: "/huong-dan" },
      { title: "Email: @student.stu.edu.vn", link: "https://accounts.google.com/v3/signin/identifier?flowEntry=AddSession&flowName=GlifWebSignIn&hd=student.stu.edu.vn&sacu=1&service=mail&dsh=S-2013176839%3A1743657989542467" },
      { title: "Học bổng", link: "/hoc-bong" },
    ],
  },
  {
    title: "Đoàn thể",
    subItems: [
      { title: "Văn bản", link: "/doan-thanh-nien" },
      { title: "Đảng bộ", link: "http://daotao1.stu.edu.vn/" },
      { title: "Công đoàn", link: "http://daotao3.stu.edu.vn/tracuutotnghiep/" },
      { title: "Email: @stu.edu.vn", link: "https://accounts.google.com/v3/signin/identifier?continue=http%3A%2F%2Fmail.google.com%2Fa%2Fstu.edu.vn%2F&hd=stu.edu.vn&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-332307488%3A1743659082908670" },
      { title: "Nhân sự", link: "https://personnel.stu.edu.vn/" },
    ],
  },
  { title: "Tạp chí", link: "/tap-chi" },
];

const Header3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="menu-item"
          onMouseEnter={() => item.subItems && setOpenIndex(index)}  // Chỉ áp dụng hover cho mục có submenu
          onMouseLeave={() => item.subItems && setOpenIndex(null)}  // Chỉ áp dụng hover cho mục có submenu
        >
          {item.link ? (
            <Link to={item.link} className="menu-title">
            {item.title}
          </Link> // Sử dụng Link thay vì navigate để điều hướng
          ) : (
            <>
              {item.title}
              {openIndex === index && (
                <div className="submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link key={subIndex} to={subItem.link}>
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Header3;
