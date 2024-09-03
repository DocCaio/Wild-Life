import styles from "./footer.module.css";
import ZooDEV from "../../assets/zoodev.png";

export default function Navbar() {
  return (
   <footer id="contact" className={styles.footer}>
    <div className={styles.img}>
    <img src={ZooDEV} alt="Logo"/>

    </div>
      

      <div className={styles.list}>
        <ul>
          <span>Contact us</span>
          <li>
          <i  id={styles.geo} className="bi bi-envelope-fill"></i>
            Email: zoodev@email.com
            </li>
          <li>
          <i  id={styles.geo} className="bi bi-telephone-fill"></i>
            Phone: +40 0800 7856
            </li>          
        </ul>
      </div>

      <div className={styles.list}>
        <ul>
          <span>Social media</span>
          <li>
          <i id={styles.geo}  className="bi bi-instagram"></i>
            <a>@ZooDEV</a>
            </li>
          <li>
          <i id={styles.geo}  className="bi bi-tiktok"></i>
            <a>@ZooDEVGarden</a>
            </li>          
        </ul>
      </div>

      <div className={styles.list}>
        <ul>
          <span>Enderess</span>
          <li>
          <i id={styles.geo} className="bi bi-geo-alt-fill"></i>
            Africa
            </li>
          <li>
          <i id={styles.geo}  className="bi bi-geo-fill"></i>
            Wakanda
            </li>          
        </ul>
      </div>
   </footer>
  );
}