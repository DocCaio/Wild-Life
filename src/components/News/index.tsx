import React from 'react';
import { Link } from 'react-router-dom';
import styles from './news.module.css';
import Teather from './assets/park.jpeg';
import Birds from './assets/birds.jpg';
import Kid from './assets/girl.jpeg';

const News: React.FC = () => {
    const newsItems = [
        {
            image: Kid,
            altText: 'A child',
            text: 'Bring the kids to interact with some animals',
        },
        {
            image: Teather,
            altText: 'Theater',
            text: 'Face painting and lots of fun for the whole family',
        },
        {
            image: Birds,
            altText: 'Birds',
            text: 'Bird Day, come and see birds from everywhere',
        },
    ];

    return (
        <section className={styles.container}>
            <div className={styles.container__texts}>
                <span className={styles.container__title}>News</span>
                <h2>Discover what's new at the Zoo</h2>
            </div>

            <div className={styles.container__cards}>
                {newsItems.map((item, index) => (
                    <div key={index} className={styles.cards}>
                        <img className={styles.cards__img} src={item.image} alt={item.altText} />
                        <p>{item.text}</p>
                        <Link className={styles.cards__links} to="/">Find out more</Link>
                    </div>
                ))}
            </div>

          
        </section>
    );
}

export default News;
