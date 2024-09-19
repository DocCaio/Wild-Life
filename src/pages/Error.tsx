import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import styles from './styles/error.module.css';


const PaginaErro = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <h1 className={styles.title}>404</h1>
          <p className={styles.text}>Oops! Page not found</p>
          <p className={styles.warn}>
            The page you are looking for does not exist yet.
          </p>
          <Link to={`/`} className={styles.btn}>
            Back home
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaginaErro;