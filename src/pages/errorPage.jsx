import { Link, useRouteError } from "react-router-dom";
import "./errorPage.css"; 

const ErrorPage=()=> {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <div className="error-content">
        <img src="../../public/vite.svg" alt="404 illustration" className="error-image" />
        <h1>404</h1>
        <p>Sorry, the page you visited does not exist.</p>
        <Link to="/" className="back-button">
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
