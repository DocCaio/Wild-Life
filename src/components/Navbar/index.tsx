
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.headerList}>
        <a className={styles.headerLink} href='#'>Home</a>

        <a className={styles.headerLink} href='#'>Contact</a>
        <a className={styles.headerLink} href='#'>Info</a>
        </ul>
      </nav>

    </header>
  );
}