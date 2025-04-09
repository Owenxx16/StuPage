import '../../App.css'
import ContentRightPage from '../../components/content/contentRight';
import Slideshow from '../../components/UI/SlideShow';
import logo1 from '../../assets/tuyensinh2025.jpg'
import logo2 from '../../assets/tuyensinh2025-2.png'


const TtinTsinh = () => {
  const majors = [
    { id: 1, ma_nganh: "7510203", ten_nganh: "Công nghệ kỹ thuật cơ điện tử", nam_bat_dau: "2004" },
    { id: 2, ma_nganh: "7510301", ten_nganh: "Công nghệ kỹ thuật điện, điện tử", nam_bat_dau: "2004" },
    { id: 3, ma_nganh: "7510302", ten_nganh: "Công nghệ kỹ thuật điện tử - viễn thông", nam_bat_dau: "2004" },
    { id: 4, ma_nganh: "7480201", ten_nganh: "Công nghệ thông tin", nam_bat_dau: "2004" },
    { id: 5, ma_nganh: "7540101", ten_nganh: "Công nghệ thực phẩm", nam_bat_dau: "2004" },
    { id: 6, ma_nganh: "7580201", ten_nganh: "Kỹ thuật xây dựng", nam_bat_dau: "2004" },
    { id: 7, ma_nganh: "7340101", ten_nganh: "Quản trị kinh doanh", nam_bat_dau: "2004" },
    { id: 8, ma_nganh: "7210402", ten_nganh: "Thiết kế công nghiệp", nam_bat_dau: "2007" },
    { id: 9, ma_nganh: "7510201", ten_nganh: "Công nghệ kỹ thuật cơ khí", nam_bat_dau: "Dự kiến mở năm 2025" },
    { id: 10, ma_nganh: "7480106", ten_nganh: "Kỹ thuật máy tính", nam_bat_dau: "Dự kiến mở năm 2025" },
    { id: 11, ma_nganh: "7540106", ten_nganh: "Đảm bảo chất lượng và an toàn thực phẩm", nam_bat_dau: "Dự kiến mở năm 2025" },
    { id: 12, ma_nganh: "7340115", ten_nganh: "Marketing", nam_bat_dau: "Dự kiến mở năm 2025" },
    { id: 13, ma_nganh: "7340120", ten_nganh: "Kinh doanh quốc tế", nam_bat_dau: "Dự kiến mở năm 2025" },
    { id: 14, ma_nganh: "7340201", ten_nganh: "Tài chính - Ngân hàng", nam_bat_dau: "Dự kiến mở năm 2025" },
    { id: 15, ma_nganh: "7510605", ten_nganh: "Logistics và Quản lý chuỗi cung ứng", nam_bat_dau: "Dự kiến mở năm 2025" },
    { id: 16, ma_nganh: "7810101", ten_nganh: "Du lịch", nam_bat_dau: "Dự kiến mở năm 2025" },
    { id: 17, ma_nganh: "7580302", ten_nganh: "Quản lý xây dựng", nam_bat_dau: "Dự kiến mở năm 2025" },
    { id: 18, ma_nganh: "7380107", ten_nganh: "Luật kinh tế", nam_bat_dau: "Dự kiến mở năm 2025" }
  ];

  const lienThongMajors = [
    {
      id: 1,
      ten_nganh: "Công nghệ Kỹ thuật Cơ điện tử",
      ma_nganh: "7510203",
      thoi_gian_dao_tao: "2 năm liên thông đại học cấp bằng kỹ sư",
      nam_bat_dau: 2005,
      nam_gan_nhat: 2024
    },
    {
      id: 2,
      ten_nganh: "Công nghệ Kỹ thuật Điện, Điện tử",
      ma_nganh: "7510301",
      thoi_gian_dao_tao: "2 năm liên thông đại học cấp bằng kỹ sư",
      nam_bat_dau: 2005,
      nam_gan_nhat: 2024
    },
    {
      id: 3,
      ten_nganh: "Công nghệ Kỹ thuật Điện tử Viễn thông",
      ma_nganh: "7510302",
      thoi_gian_dao_tao: "2 năm liên thông đại học cấp bằng kỹ sư",
      nam_bat_dau: 2005,
      nam_gan_nhat: 2024
    },
    {
      id: 4,
      ten_nganh: "Công nghệ Thông tin",
      ma_nganh: "7480201",
      thoi_gian_dao_tao: "2 năm liên thông đại học cấp bằng kỹ sư",
      nam_bat_dau: 2005,
      nam_gan_nhat: 2024
    },
    {
      id: 5,
      ten_nganh: "Công nghệ Thực phẩm",
      ma_nganh: "7540101",
      thoi_gian_dao_tao: "2 năm liên thông đại học cấp bằng kỹ sư",
      nam_bat_dau: 2005,
      nam_gan_nhat: 2024
    },
    {
      id: 6,
      ten_nganh: "Kỹ thuật Xây Dựng",
      ma_nganh: "7580201",
      thoi_gian_dao_tao: "2 năm liên thông đại học cấp bằng kỹ sư",
      nam_bat_dau: 2005,
      nam_gan_nhat: 2024
    },
    {
      id: 7,
      ten_nganh: "Quản trị Kinh doanh",
      ma_nganh: "7340101",
      thoi_gian_dao_tao: "2 năm liên thông đại học cấp bằng cử nhân",
      nam_bat_dau: 2005,
      nam_gan_nhat: 2024
    },
    {
      id: 8,
      ten_nganh: "Thiết kế Công nghiệp",
      ma_nganh: "7210402",
      thoi_gian_dao_tao: "2 năm liên thông đại học cấp bằng cử nhân",
      nam_bat_dau: 2007,
      nam_gan_nhat: 2024
    }
  ];

  const imageList = [
    logo1,logo2
  ];

  return (
    <>
    <Slideshow images={imageList} interval={3000}/>
    <div className="content-container">
      <div className="left-column" style={{lineHeight:'24px'}}>
      <h3 style={{color:'#0C4DA5'}}>Tuyển Sinh Đại Học Chính Quy 2025</h3>
    <br />
    <span style={{color:'gray'}}>Cập nhật 19/02/2022 - 02:37:53 AM (GMT+7)</span>
    <br />
    <strong>Thông tin danh mục ngành đào tạo đại học được phép đào tạo chính quy:</strong>
    <br />
    <div style={{ padding: '20px' }}>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead style={{ backgroundColor: '#f0f0f0' }}>
          <tr>
            <th>STT</th>
            <th>Mã ngành</th>
            <th>Tên ngành</th>
            <th>Năm bắt đầu đào tạo</th>
          </tr>
        </thead>
        <tbody>
          {majors.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.ma_nganh}</td>
              <td>{item.ten_nganh}</td>
              <td>{item.nam_bat_dau}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <strong>Thông tin danh mục được phép đào tạo liên thông đại học chính quy từ cao đẳng:</strong>
    <div style={{ padding: '20px' }}>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead style={{ backgroundColor: '#f0f0f0' }}>
          <tr>
            <th>STT</th>
            <th>Tên ngành</th>
            <th>Mã ngành</th>
            <th>Thời gian đào tạo</th>
            <th>Năm bắt đầu đào tạo</th>
            <th>Năm đã tuyển sinh và đào tạo gần nhất</th>
          </tr>
        </thead>
        <tbody>
          {lienThongMajors.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.ten_nganh}</td>
              <td>{item.ma_nganh}</td>
              <td>{item.thoi_gian_dao_tao}</td>
              <td>{item.nam_bat_dau}</td>
              <td>{item.nam_gan_nhat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <strong>Các phương thức xét tuyển:</strong><br />
    <strong>1. Xét tuyển bằng học bạ</strong><br />
    <strong>2. Xét tuyển bằng kết quả thi THPT </strong><br />
    <strong>3. Xét tuyển bằng kết quả thi Đánh giá năng lực do Đại học Quốc Gia TP.HCM tổ chức</strong><br /><br />
    <strong>Các tổ hợp xét tuyển: </strong><br />
    <span>+ Đối với học bạ: Tổ hợp 1: TB lớp 10; TB lớp 11; TB lớp 12. Tổ hợp 2: Điểm TB cả năm lớp 12 của 3 môn học; trong đó có ít nhất 1 môn Toán hoặc Văn; và, hai môn học có điểm cao nhất, nhì còn lại.</span><br />
    <span>+ Đối với Điểm thi tốt nghiệp THPT Tổ hợp 3 môn; trong đó có ít nhất 1 môn Toán hoặc Văn; và, hai môn thi có điểm cao nhất, nhì còn lại.</span><br />
    <strong>Hình thức và thời gian xét tuyển:</strong><br />
    <span>Hình thức và thời gian xét tuyển theo quy định chung của Bộ GD&ĐT và của Trường. Xét tuyển đợt 1 theo lịch chung của cả nước. Xét tuyển sớm và xét bổ sung (nếu có) theo lịch riêng của trường.</span><br />
    <br />
    <div style={{textAlign:'center'}}>
    <strong>VĂN PHÒNG TƯ VẤN TUYỂN SINH – TRƯỜNG ĐẠI HỌC CÔNG NGHỆ SÀI GÒN</strong><br />
    <strong> Địa chỉ:</strong> 180 Cao Lỗ, Phường 4, Quận 8, TP. Hồ Chí Minh. <br />
    <strong>Số điện thoại:</strong> (028).38.505.520 - 115; 116 hoặc Hotline: 0902.992.306<br />
    <strong>Kênh tư vấn trực tuyến:</strong> http://stu.edu.vn/vi/269/cau-hoi-tu-van.html<br />
    <strong>Fanpage STU:</strong> https://www.facebook.com/DHCNSG<br />
    <strong>Youtube:</strong> youtube.com/ĐạihọcCôngNghệSàiGònSTU<br />
    <strong>Tiktok:</strong> https://www.tiktok.com/@dhcnsg<br />
    </div>
    </div>
    <div className="right-column">
            <ContentRightPage/>
        </div>
      </div>
    
    </>
  );
};
export default TtinTsinh;
