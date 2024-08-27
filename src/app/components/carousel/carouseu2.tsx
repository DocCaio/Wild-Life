
import styles from "../../page.module.css";
import Image from "next/image";
import Moosen from '../../../assets/moose.jpg';

export default function Home() {
    return (
      <>


<div className={styles.item}>
<Image alt="Wild animal back-ground" src={Moosen} />
<div className={styles.content}>
  <div className={styles.author}>Caio</div>
  <div className={styles.title}>Lion</div>
  <div className={styles.topic}>Wild</div>
  <div className={styles.description}>
    Description
  </div>
  <div className={styles.buttons}>
    <button>See more</button>
    <button>Subscribe</button>

  </div>

</div>
</div>

</>
  );

}
