import { Link } from 'react-router-dom';
import styles from './shows.module.css';
import pic from './assets/piquinique.jpg'
import paint from './assets/paint.jpg';
import walk from './assets/walk.jpg';


export default function Shows() {
  return (
    <section className={styles.container}>

      <div>
        <span className={styles.title}>Upcoming events</span>
        <h2 className={styles.text}>Join us!</h2>
      </div>


      <div className={styles.containCards}>

      <div className={styles.cards}>

        <div>
          <img src={pic} alt={'descricao'} />
        </div>

        <div>
          <span className={styles.containDescription}>
            Piquinique com as crianças
            </span>
        </div>

        <div className={styles.contain}>
          <span className={styles.containDate}>
            <i className="bi bi-calendar3"></i>
            15 Jun
          </span>
          <div className={styles.icon}>
          <i className="bi bi-caret-right-fill"></i>
        </div>        
        </div>

      

      </div>


      <div className={styles.cards}>
        <div>
          <img src={paint} alt={'descrcao'} />
        </div>

        <div>
          <span className={styles.containDescription}>
            Aula de pintura
            </span>
        </div>

        <div className={styles.contain}>
          <span className={styles.containDate}>
            <i className="bi bi-calendar3"></i>
            27 Feb
          </span>
          <div className={styles.icon}>
          <i className="bi bi-caret-right-fill"></i>
        </div>
        </div>

     


      </div>




      <div className={styles.cards}>

        <div>
          <img src={walk} alt={'descrcao'} />
        </div>

        <div>
          <span className={styles.containDescription}>
            Trilha em grupo
            </span>
        </div>

        <div className={styles.contain}>
          <span className={styles.containDate}>
            <i className="bi bi-calendar3"></i>
            12 Aug
          </span>
          <div className={styles.icon}>
          <i className="bi bi-caret-right-fill"></i>
        </div>
        </div>

     


      </div>

      </div>
      <div className={styles.btn}>
        <Link className={styles.btn__link} to={'/'}>Find out more</Link>
      </div>

    </section>
  );
}
