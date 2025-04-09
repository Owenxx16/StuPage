import React from "react";
import "./Footer2.css";
import stuLogo from "../../assets/shortLogo.png"
import fbIcon from "../../assets/fb.png"
import twIcon from "../../assets/twitter.png"
import ytIcon from "../../assets/youtube.png"
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <div className="F2_container">
      <div className="F2_column">
        <img src={stuLogo}  />
      </div>
      <div className="F2_column">
      <h3>Trường Đại học Công nghệ Sài Gòn - STU</h3><br />
        <span>180 Cao Lỗ, Phường 4, Quận 8, Tp. Hồ Chí Minh</span><br />
        <span>ĐT: (028) 38 505 520; Fax: (84.8) 3850 6595; Email: contact@stu.edu.vn</span><br />
        <span>BẢN QUYỀN THUỘC VỀ TRƯỜNG ĐẠI HỌC CÔNG NGHỆ SÀI GÒN</span><br />
        <span>Phòng Quản lý khoa học & Sau đại học thiết kế và thực hiện</span>
      </div>
      <div className="F2_column">
      <h3>CỘNG ĐỒNG STU</h3>
      <br />
      <Link to="https://www.facebook.com/DHCNSG"><img src={fbIcon}/></Link>
      <Link to="https://twitter.com/DHCNSG"><img src={twIcon}/></Link>
      <Link to="https://www.youtube.com/c/%C4%90%E1%BA%A1ih%E1%BB%8DcC%C3%B4ngNgh%E1%BB%87S%C3%A0iG%C3%B2nSTU"><img src={ytIcon}/></Link>
      </div>
    </div>
  );
};

export default Footer2;
