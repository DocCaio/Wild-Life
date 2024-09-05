
import { Link } from "react-router-dom";
import styles from "./news.module.css";
import Teather from "./assets/park.png";
import Birds from "./assets/birds.jpeg";
import Kid from "./assets/girl.jpeg";

export default function News() {
    return (
        <section className={styles.container}>
            <div className={styles.container__texts}>
            <span className={styles.container__title}>News</span>
            <h2>Discover what's new at the Zoo</h2>
            </div>
          

            <div className={styles.container__cards}>

            <div className={styles.cards}>
              <img src={Kid} alt="A child" />
                <p>
                    Bring the kids to interact
                    with some animals
                </p>
            </div>

            <div>
            <img src={Teather} alt="Theather" />
                <p>
                    Ecological theater about
                    the importance of preserving
                    the environment
                </p>
            </div>

            <div>
                <img src={Birds} alt="Birds" />
                <p>
                    Bird Day, come and see birds
                    from everywhere
                </p>
            </div>

            </div>
            <Link to={'/'}>Find out more</Link>
        </section>
    );
}