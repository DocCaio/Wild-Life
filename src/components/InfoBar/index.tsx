
import { Link } from "react-router-dom";
import styles from "./mainbar.module.css";
import Logo from "../../assets/zoodev.png";

export default function MainBar() {
  return (
    <section className={styles.mainBar}>
      <div className={styles.bar}>
   
          <Link className={styles.headerLink}
           to={'/'}>
             <img src={Logo} alt="Logo"/>

           </Link>
         
        <ul className={styles.barList}>
         
          <li>
          <a className={styles.headerLink} href='#contact'>Visit us</a>
          </li>
          <li>
          <Link className={styles.headerLink} to={'/info'}>Projects</Link>
          </li>    
          <li>
          <Link className={styles.headerLink} to={'/info'}>Education</Link>
          </li>    

          <li>
          <Link className={styles.headerLink} to={'/info'}>News</Link>
          </li>    

          <li>
          <Link className={styles.headerLink} to={'/info'}>Books</Link>
          </li>    

          <li>
          <Link className={styles.headerLink} to={'/info'}>Support us</Link>
          </li>    


  
    
        </ul>
      </div>

    </section>
  );
}