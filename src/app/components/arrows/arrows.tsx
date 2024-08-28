
import styles from "./arrows.module.css";

export default function Navbar() {
  return (
<div className={styles.arrows}>
    <button className={styles.btn} id={styles.prev}>set</button>
    <button className={styles.btn} id={styles.next}>set</button>

</div>
  );
}
