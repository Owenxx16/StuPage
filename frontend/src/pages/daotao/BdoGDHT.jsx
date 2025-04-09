import './BdoGDHT.css'
import '../../App.css'
import EventSchedule from '../../components/content/EventSchedule';


const BdoGDHT = () => {
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
          <img src="../../src/assets/banner_bieudogiangday.png" alt="bieudogiangday" />
        </a>
      </div>
      <div className="content-container">
        <div className="left-column">
        <div className="schedule-container">
      <div className="schedule-header">
        <div className="icon-box">
          <img src="../../src/assets/news.png" alt="icon" className="icon" />
        </div>
        <h2 className="title">Biểu đồ giảng dạy và học tập</h2>
      </div>

      <h3 className="subtitle">Biểu đồ giảng dạy & học tập năm học 2024 - 2025</h3>
      <p className="update-time">Cập nhật 06/05/2024 - 02:49:44 PM (GMT+7)</p>

      <div className="image-wrapper">
        <img src="../../src/assets/BDGD2425.jpg" alt="Biểu đồ giảng dạy" className="schedule-image" />
      </div>

      <h4 className="caption">BIỂU ĐỒ GIẢNG DẠY & HỌC TẬP NĂM HỌC 2024 - 2025</h4>
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
export default BdoGDHT;
