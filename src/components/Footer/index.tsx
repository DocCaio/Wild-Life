import styles from "./footer.module.css";
import ZooDEV from "../../assets/zoodev.png";

export default function Navbar() {
  return (
   <footer className={styles.footer}>
      <img src={ZooDEV} alt="Logo"/>
   </footer>
  );
}