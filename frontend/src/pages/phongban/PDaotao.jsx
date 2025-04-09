import pdtLogo from '../../assets/phongDaoTaoLogopng.png'
import icon5 from '../../assets/icon5.png'
import '../../App.css'
import ContentRightPage from '../../components/content/contentRight';
const PDaotao = () => {
  return (
    <>
    <div style={{ textAlign: "center" }}>
      <img src={pdtLogo}/>
    </div><br />
    
    <div className="content-container">
        <div className="left-column">
          <img src={icon5} style={{ width: "24px", height: "24px", verticalAlign: "middle" }} />
          <strong style={{ color: "red", fontSize:'18px' }}> Giới Thiệu Phòng</strong><br /><br /><hr /><br />
          <h3>Chức năng - Nhiệm vụ</h3><br />
          <p>Cập nhật 07/04/2010 - 05:00:00 PM (GMT+7)</p><br />
          <div style={{lineHeight:1.6}}>
            <p>Nhận ủy nhiệm của Thầy Hiệu trưởng; tổ chức, quản lý và điều hành việc triển khai thực hiện chương trình, kế hoạch đào tạo và quản lý học vụ.</p>
            <p>1. Tổ chức, quản lý và điều hành việc triển khai về tổ chức và kế hoạch để thực hiện chương trình đào tạo đã được phê duyệt.</p>
            <p style={{paddingLeft:'10px'}}>1.1. Quản lý chương trình đào tạo và đề cương các môn học đã được phê duyệt.</p>
            <p style={{paddingLeft:'10px'}}>1.2. Lịch trình giảng dạy và học tập.</p>
            <p style={{paddingLeft:'10px'}}>1.3. Tổ chức lớp.</p>
            <p style={{paddingLeft:'10px'}}>1.4. Sắp xếp thời khóa biểu, thi cử.</p>
            <p style={{paddingLeft:'10px'}}>1.5. Khối lượng và kế hoạch chi tiết giảng dạy /học tập.</p>
            <p style={{paddingLeft:'10px'}}>1.6. Mời giáo viên giảng dạy theo đề nghị của Khoa có thông qua ý kiến của Phó Hiệu trưởng phụ trách về đào tạo.</p>
            <p style={{paddingLeft:'10px'}}> 1.7. Nắm chắc khối lượng công tác giảng dạy, nhu cầu về phòng học, thí nghiệm, thực hành.</p>
            <p>2. Tổ chức, quản lý và điều hành thực hiện các Quy chế của Bộ Giáo dục và Đào tạo và của Trường về học vụ, về hồ sơ, về tuyển sinh và tốt nghiệp của học sinh – sinh viên.</p>
            <p>3. Giúp Ban Giám hiệu và các Khoa trong việc quan hệ với các cơ quan ngoài trường phục vụ cho công tác đào tạo.</p>
            <p>4. Tổ chức, quản lý và điều hành việc thu thập thông tin để nhận xét, đánh giá về :</p>
            <p style={{paddingLeft:'10px'}}>4.1. Thực thi chương trình kế hoạch đào tạo.</p>
            <p style={{paddingLeft:'10px'}}>4.2. Thực hiện các Quy chế của Bộ và của Trường.</p>
            <p style={{paddingLeft:'10px'}}>4.3. Tình hình giảng dạy của giáo viên và học tập của học sinh – sinh viên và những ý kiến, yêu cầu của giáo viên và học sinh – sinh viên về giảng dạy, học tập.</p>
            <p>5. Tổ chức, quản lý và điều hành việc xây dựng và thực thi hệ thống các quy trình, quy định, mẫu mã, phân nhiệm để thực hiện, để kiểm tra và đánh giá công tác đã được giao nhiệm vụ cho phòng. Luôn xem xét kịp thời, bổ sung, sửa đổi và xây dựng mới.</p>
            <p>6. Dự toán kinh phí hoạt động, các phương tiện cần thiết đáp ứng yêu cầu công tác của Phòng.</p>
            <p>7. Đề xuất, tham mưu cho Ban Giám hiệu những biện pháp nhằm nâng cao chất lượng, hiệu quả công tác giáo dục – đào tạo toàn diện trong mọi hoạt động của nhà trường.</p>
            <p>8. Giúp Ban Giám hiệu thực hiện các báo cáo cấp trên về giáo dục – đào tạo theo nội dung và thời điểm quy định.</p>
            <p>9. Báo cáo định kỳ các nội dung công tác được giao cho Ban Giám hiệu.</p>
            <p>10. Trưởng phòng là người chịu trách nhiệm tổ chức, quản lý và điều hành các nhiệm vụ trên.</p>
        </div>
          </div>
        <div className="right-column">
          <ContentRightPage />
        </div>
      </div>
    </>
  );
};
export default PDaotao;
