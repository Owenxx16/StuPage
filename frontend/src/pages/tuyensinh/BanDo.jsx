import mapLogo from "../../assets/mapLogo.png"
import map from "../../assets/map.png"
import icon1 from "../../assets/icon15.png"
import icon2 from "../../assets/icon16.png"
import "../../App.css"
import ContentRightPage from "../../components/content/contentRight"

const BanDo = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img src={mapLogo} />
      </div>
      <div className="content-container">
        <div className="left-column">
        <img src={icon1} style={{ width: "24px", height: "24px", verticalAlign: "middle" }} />
        <strong style={{ color: "red", fontSize:'18px' }}> Sơ Đồ Trên Google Maps</strong><br /><br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9544104264673!2d106.67525181135242!3d10.737997189364206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f62a90e5dbd%3A0x674d5126513db295!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgU8OgaSBHw7Ju!5e0!3m2!1svi!2s!4v1744062700910!5m2!1svi!2s"
          width="800"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <br /><br />
        <img src={icon2} style={{ width: "24px", height: "24px", verticalAlign: "middle" }} />
        <strong style={{ color: "red", fontSize:'18px' }}> Sơ Đồ đến STU</strong><br /><br />
        <img src={map}/>
        </div>
        <div className="right-column">
          <ContentRightPage />
        </div>
      </div>
    </>
  );
};

export default BanDo;
