import { Link } from 'react-router-dom';
import styles from './shows.module.css';
import eventsData from '../../data/shows.json'; // Ajuste o caminho conforme necessário

export default function Shows() {
  return (
    <section className={styles.container}>
      <div>
        <span className={styles.title}>Upcoming events</span>
        <h2 className={styles.text}>Join us!</h2>
      </div>

      <div className={styles.cardsContainer}>
        {eventsData.map((event) => (
          <div key={event.id} className={styles.cards}>
            <img src={event.image} alt={`Event ${event.id}`} />
            <span>{event.description}</span>
            <span>{event.date}<i className="bi bi-calendar3"></i></span>
            <span>
              <i className="bi bi-caret-right-fill"></i>
            </span>
          </div>
        ))}
      </div>

      <div>
        <Link className={styles.container__link} to={'/'}>Find out more</Link>
      </div>
    </section>
  );
}
