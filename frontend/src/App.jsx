import React from "react";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GioiThieu from "./pages/GioiThieu";
import BdoGDHT from "./pages/daotao/BdoGDHT";
import CamNang from "./pages/daotao/CamNang";
import CtrinhDtao from "./pages/daotao/CtrinhDtao";
import HuongNghiep from "./pages/tuyensinh/HuongNghiep";
import TtinTsinh from "./pages/tuyensinh/TtinTsinh";
import ChoiTvan from "./pages/tuyensinh/ChoiTvan";
import TnghiemCnghe from "./pages/tuyensinh/TnghiemCnghe";
import TnghiemIQ from "./pages/tuyensinh/TnghiemIQ";
import BanDo from "./pages/tuyensinh/BanDo";
import PDaotao from "./pages/phongban/PDaotao";
import PHcNsPc from "./pages/phongban/PHcNsPc";
import PKhoachTchinh from "./pages/phongban/PKhoachTchinh";
import PCtacSvien from "./pages/phongban/PCtacSvien";
import BThanhTra from "./pages/phongban/BThanhTra";
import BanKhocCban from "./pages/phongban/BanKhocCban";
import BDbClGd from "./pages/phongban/BDbClGd";
import KCngheTtin from "./pages/khoa/KCngheTtin";
import KKthuatCtrinh from "./pages/khoa/KKthuatCtrinh";
import KCngheTpham from "./pages/khoa/KCngheTpham";
import KDienDtu from "./pages/khoa/KDienDtu";
import KCoKhi from "./pages/khoa/KCoKhi";
import KQtriKdoanh from "./pages/khoa/KQtriKdoanh";
import LienHe from "./pages/Lienhe";
import DoanThanhNien from "./pages/sinhvien/DoanThanhNien";
import BieuMau from "./pages/sinhvien/BieuMau";
import HuongDan from "./pages/sinhvien/HuongDan";
import HocBong from "./pages/sinhvien/HocBong";
import TapChi from "./pages/TapChi";
import Footer from "./components/Footer/Footer";
import KDesign from "./pages/khoa/KDesign";
import LoginForm from "./pages/LoginForm";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        {/*Trang chủ*/}
        <Route path="/" element={<Home/>} />
        {/*Giới thiệu*/}
        <Route path="/gioi-thieu" element={<GioiThieu/>} />
        {/*Đào tạo*/}  
        <Route path="/bieu-do-giang-day-va-hoc-tap" element={<BdoGDHT/>} />
        <Route path="/cam-nang" element={<CamNang/>} />
        <Route path="/chuong-trinh-dao-tao" element={<CtrinhDtao/>} />
        {/*Tuyển sinh*/}
        <Route path="/huong-nghiep" element={<HuongNghiep/>} />
        <Route path="/thong-tin-tuyen-sinh" element={<TtinTsinh/>} />
        <Route path="/cau-hoi-tu-van" element={<ChoiTvan/>} />
        <Route path="/trac-nghiem-chon-nghe" element={"https://stu.edu.vn/vi/285/trac-nghiem-chon-nghe.html"} />
        <Route path="/trac-nghiem-iq" element={<TnghiemIQ/>} />
        <Route path="/ban-do-den-stu" element={<BanDo/>} />
        {/*Phòng ban*/}
        <Route path="/phong-dao-tao" element={<PDaotao/>} />
        <Route path="/phong-hc-ns-pc" element={<PHcNsPc/>} />
        <Route path="/phong-qlkh-sdh" element={<GioiThieu/>} />
        <Route path="/phong-kh-tc" element={<PKhoachTchinh/>} />
        <Route path="/phong-ct-sv" element={<PCtacSvien/>} />
        <Route path="/ban-thanh-tra" element={<BThanhTra/>} />
        <Route path="/ban-kh-cb" element={<BanKhocCban/>} />
        <Route path="/ban-db-cl-gd" element={<BDbClGd/>} />
        {/*Khoa*/}
        <Route path="/khoa-cn-tt" element={<KCngheTtin/>} />
        <Route path="/khoa-kt-ct" element={<KKthuatCtrinh/>} />
        <Route path="/khoa-cn-tp" element={<KCngheTpham/>} />
        <Route path="/khoa-dien-dientu" element={<KDienDtu/>} />
        <Route path="/khoa-co-khi" element={<KCoKhi/>} />
        <Route path="/khoa-qt-kd" element={<KQtriKdoanh/>} />
        <Route path="/khoa-design" element={<KDesign/>} />
        {/*Liên hệ*/}
        <Route path="/lien-he" element={<LienHe/>} />
        {/*Sinh viên*/}
        <Route path="/doan-thanh-nien" element={<DoanThanhNien/>} />
        <Route path="/bieu-mau" element={<BieuMau/>} />
        <Route path="/huong-dan" element={<HuongDan/>} />
        <Route path="/hoc-bong" element={<HocBong/>} />
        {/*Tạp chí*/}
        <Route path="/tap-chi" element={<TapChi/>} />
        {/*Đăng nhập*/}
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
