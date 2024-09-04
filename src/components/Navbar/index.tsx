
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.headerList}>
          <li>
          <Link className={styles.headerLink} to={'/'}>Home</Link>
          </li>
          <li>
          <a className={styles.headerLink} href='#contact'>Contact</a>
          </li>
          <li>
          <Link className={styles.headerLink} to={'/info'}>Info</Link>
          </li>     

  
    
        </ul>
      </nav>

    </header>
  );
}