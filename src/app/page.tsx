
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Image from "next/image";
import Lion from '../assets/tiger.jpeg';
import Thumbnail from './components/thumbnail/thumbnail';
import Arrow from './components/arrows/arrows';



export default function Home() {
  return (
    <>
      <Navbar/>
      <main className={styles.main}>
        <div className={styles.carousel}>
          <div className={styles.list}>
            <div className={styles.item}>
              <Image className={styles.img} alt="Wild animal back-ground" src={Lion} />
               <div className={styles.content}>
               <div className={styles.author}>Animal</div>
               <div className={styles.title}>Tiger</div>
               <div className={styles.topic}>Wild Life</div>
               <div className={styles.description}>
                  Description
                </div>
                <div className={styles.buttons}>
                  <button className={styles.btn}>See more</button>
                  <button className={styles.btn}>Subscribe</button>

                </div>

              </div>
            </div>

          </div>

        </div>
          <Thumbnail/> 
          <Arrow/>
      </main>
    </>
  );

}
