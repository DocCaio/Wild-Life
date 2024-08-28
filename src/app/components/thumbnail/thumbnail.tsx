import styles from './thumbnail.module.css';
import Image from 'next/image';
import Lion from '../../../assets/tiger.jpeg';

export default function Thumbnail() {
  return (
    <section className={styles.thumbnail}>
    <div className={styles.item}>
        <Image width={100} height={100}  className={styles.img} alt='slide'  src={Lion}/>
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
        <Image width={100} height={100} className={styles.img} alt='slide' src={Lion}/>
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
        <Image width={100} height={100}  className={styles.img} alt='slide'  src={Lion}/>
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
        <Image width={100} height={100}  className={styles.img} alt='slide' src={Lion}/>
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
