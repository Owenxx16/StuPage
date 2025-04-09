import '../../App.css'
import EventSchedule from '../../components/content/EventSchedule';

const CamNang = () => {

    const links = [
      { text: "Trắc Nghiệm Chọn Nghề", color: "#C2185B", url: "#" },
      { text: "Trắc Nghiệm IQ", color: "#0000FF", url: "#" },
      { text: "Tuyển sinh thạc sĩ", color: "#C79100", url: "#" },
      { text: "Tuyển Sinh Đại Học", color: "#66BB6A", url: "#" },
  ];
  return (
    <>
    <div className="img-fluid">
        <a href="">
          <img src="../../src/assets/camnang.png" alt="bieudogiangday" />
        </a>
      </div>
      <div className="content-container">
        <div className="left-column">
        <div className="schedule-container">
      <div className="schedule-header">
        <div className="icon-box">
          <img src="../../src/assets/news.png" alt="icon" className="icon" />
        </div>
        <h2 className="title">Đào Tạo</h2>
      </div>

      <h3 className="subtitle">Đào Tạo</h3>
      <p className="update-time">Cập nhật 06/05/2024 - 02:49:44 PM (GMT+7)</p>

      <p style={{lineHeight:"25px", fontWeight:"400"}}>Các bạn sinh viên thân mến,

      </p>
      <p style={{lineHeight:"25px", fontWeight:"400"}}>Các bạn sinh viên thân mến,

Bước vào trường đại học, các bạn bước sang một giai đoạn mới của hệ thống đào tạo với mục tiêu, nội dung và phương pháp khác nhiều so với các giai đoạn giáo dục mà các bạn đã trải qua. Vào một cơ sở đào tạo cụ thể, chắc các bạn gặp không ít bỡ ngỡ đối với các tổ chức, phương thức hoạt động, các quy định và nề nếp của chúng …
</p>
<p style={{lineHeight:"25px", fontWeight:"400"}}>Bằng tài liệu này, STU mong muốn tạo điều kiện để các bạn sớm hội nhập vào môi trường đào tạo mới - đại học STU.

Chúc các bạn thành công./.</p>
<p style={{textAlign:"center"}}>Trường Đại học Công nghệ Sài gòn</p>
<a href="https://dev.stu.edu.vn/Camnang/2024/">
    <img src="../../src/assets/cam nang 2019 - 2024.jpg" alt="" style={{height:"auto", maxWidth:"100%",}}/>
</a>
<p style={{color:"blue", textAlign:"center"}}>Click vào hình để xem nội dung chi tiết</p>
    </div>
        </div>
        <div className="right-column">
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
                <iframe width="270" height="150" src="https://www.youtube.com/embed/0FsuHXDdJMM?si=d5CCTU6zT7gGsgn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <EventSchedule/>
        </div>
        </div>
      </div>
    </>
  );
};
export default CamNang;
