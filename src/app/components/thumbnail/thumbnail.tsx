import styles from './thumbnail.module.css';
import Image from 'next/image';
import Lizard from  '../../../assets/lizard.jpeg';
import Alce from '../../../assets/moose.jpeg';
import Elefante from '../../../assets/elefante.jpeg';
import Tucano from '../../../assets/tucano.jpeg';

export default function Thumbnail() {
  return (
    <section className={styles.thumbnail}>
    <div className={styles.item}>
        <Image width={0} height={0}  className={styles.img} alt='slide'  src={Lizard}/>
        <div className={styles.content}>
            <div className={styles.title}>
                Name Slider
            </div>
            <div className={styles.description}>
                Description
            </div>
        </div>
    </div>
    <div className={styles.item}>
        <Image width={0} height={0} className={styles.img} alt='slide' src={Alce}/>
        <div className={styles.content}>
            <div className={styles.title}>
                Name Slider
            </div>
            <div className={styles.description}>
                Description
            </div>
        </div>
    </div>
    <div className={styles.item}>
        <Image width={0} height={0}  className={styles.img} alt='slide'  src={Elefante}/>
        <div className={styles.content}>
            <div className={styles.title}>
                Name Slider
            </div>
            <div className={styles.description}>
                Description
            </div>
        </div>
    </div>
    <div className={styles.item}>
        <Image width={0} height={0}  className={styles.img} alt='slide' src={Tucano}/>
        <div className={styles.content}>
            <div className={styles.title}>
                Name Slider
            </div>
            <div className={styles.description}>
                Description
            </div>
        </div>
    </div>
</section>
  );
}
