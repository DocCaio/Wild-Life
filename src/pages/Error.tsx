import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';


const PaginaErro = () => {
  return (
    <>
      <Navbar/>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">Oops! Page not found</p>
          <p className="lead">
            The page you are looking for does not exist yet.
          </p>
          <Link to={`/`} className="btn btn-primary">
            Back home
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaginaErro;