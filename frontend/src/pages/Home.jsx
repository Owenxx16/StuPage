import ContentPage from "../components/content/Content";
import ContentRightPage from "../components/content/contentRight";
import Header from "../components/Header/Header";
import '../App.css'

const Home = () => {
  return (
    <>
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
