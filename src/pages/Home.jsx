import ContentPage from "../components/content/Content";
import ContentRightPage from "../components/content/contentRight";
import Header from "../components/Header/Header";
import Slide from "../components/UI/Slide";
import '../App.css'
import logo1 from '../assets/tuyensinh2025.jpg'
import logo2 from '../assets/tuyensinh2025-2.png'

const Home = () => {
  const imageList = [
      logo1,logo2
    ];
  return (
    <>
    <Slide images={imageList} interval={3000}/>
      <div className="content-container">
        <div className="left-column">
            <ContentPage/>
        </div>
        <div className="right-column">
            <ContentRightPage/>
        </div>
      </div>
    </>
  );
};
export default Home;
