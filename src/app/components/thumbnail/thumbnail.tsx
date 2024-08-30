import styles from './thumbnail.module.css';
import Image from 'next/image';
import Lizard from '../../../assets/lizard.jpeg';
import Alce from '../../../assets/moose.jpeg';
import Elefante from '../../../assets/elefante.jpeg';
import Tucano from '../../../assets/tucano.jpeg';

const items = [
  { src: Lizard, title: 'Name Slider', description: 'Description' },
  { src: Alce, title: 'Name Slider', description: 'Description' },
  { src: Elefante, title: 'Name Slider', description: 'Description' },
  { src: Tucano, title: 'Name Slider', description: 'Description' },
];

export default function Thumbnail() {
  return (
    <section className={styles.thumbnail}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <Image width={0} height={0} className={styles.img} alt='slide' src={item.src} />
          <div className={styles.content}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
