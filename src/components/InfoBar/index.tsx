
import { Link } from "react-router-dom";
import styles from "./mainbar.module.css";
import Logo from "../../assets/zoodev.png";

export default function MainBar() {
  return (
    <section className={styles.mainBar}>
      <div className={styles.bar}>
   
        
         
        <ul className={styles.barList}>
         
          <li>
          <a className={styles.barLink} href='#'>Visit us</a>
          </li>
          <li>
          <Link className={styles.barLink} to={'#'}>Projects</Link>
          </li>    
          <li>
          <Link className={styles.barLink} to={'#'}>Education</Link>
          </li>    

          <li>
          <Link className={styles.barLink} to={'#'}>News</Link>
          </li>    

          <li>
          <Link className={styles.barLink} to={'#'}>Books</Link>
          </li>    

          <li>
          <Link className={styles.barLink} to={'#'}>Support us</Link>
          </li>    


  
    
        </ul>
        <Link className={styles.headerLink}
           to={'/'}>
             <img src={Logo} alt="Logo"/>

           </Link>
      </div>

    </section>
  );
}