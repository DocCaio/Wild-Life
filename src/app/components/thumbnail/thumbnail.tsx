import styles from './thumbnail.module.css';
import Image from 'next/image';
import Lion from '../../../assets/tiger.jpeg';
import Lizard from  '../../../assets/lizard.jpeg';
import Alce from '../../../assets/moose.jpeg';
import Eelefante from '../../../assets/elefante.jpeg';

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
        <Image width={0} height={0}  className={styles.img} alt='slide'  src={Eelefante}/>
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
        <Image width={0} height={0}  className={styles.img} alt='slide' src={Lion}/>
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
