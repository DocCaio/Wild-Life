import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.headerList}>
        <Link className={styles.headerLink} href='#'>Home</Link>

        <Link className={styles.headerLink} href='#'>Contact</Link>
        <Link className={styles.headerLink} href='#'>Info</Link>
        </ul>
      </nav>

    </header>
  );
}
