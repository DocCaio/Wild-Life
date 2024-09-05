import { Link } from "react-router-dom";
import styles from "./shows.module.css";



export default function Shows() {
  return (
<section className={styles.container}>

  <div>
    <span className={styles.title}>Upcoming events</span>
    <h2 className={styles.text}>Join us!</h2>
    </div>

    <div>
      <img src="" alt=""/>
      <p></p>
      <div>

      </div>
    </div>

    <Link className={styles.container__link} to={'/'}>Find out more</Link>
</section>
  );
}