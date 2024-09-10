
import { Link } from "react-router-dom";
import styles from "./mainbar.module.css";
import Logo from "../../assets/zoodev.png";

export default function MainBar() {
  return (
    <section className={styles.mainBar}>
      <div className={styles.nav}>
        <ul className={styles.headerList}>
          <li>
          <Link className={styles.headerLink}
           to={'/'}>
             <img src={Logo} alt="Logo"/>

           </Link>
          </li>
          <li>
          <a className={styles.headerLink} href='#contact'>Contact</a>
          </li>
          <li>
          <Link className={styles.headerLink} to={'/info'}>Info</Link>
          </li>    

  
    
        </ul>
      </div>

    </section>
  );
}