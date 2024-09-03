
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.headerList}>
          <li>
          <a className={styles.headerLink} href='#'>Home</a>
          </li>
          <li>
          <a className={styles.headerLink} href='#contact'>Contact</a>
          </li>
          <li>
          <a className={styles.headerLink} href='../../pages/Info'>Info</a>
          </li>     

  
    
        </ul>
      </nav>

    </header>
  );
}