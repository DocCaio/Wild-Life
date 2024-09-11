
import styles from "./styles/info.module.css";
import Navbar from "../components/Navbar";
import MainBar from "../components/InfoBar";
import Footer from "../components/Footer";
import Mamba from "./assets/blackMamba.jpeg";
import Turtle from "./assets/tataruga.jpeg";
import Giraffe from "./assets/giraffe.jpg";
import Lion from "./assets/lion.jpeg";
import { Link } from "react-router-dom";

export default function Info() {
  return (
    <>
      <Navbar />
      <MainBar />
      <main>
        <section className={styles.container}>
          <span className={styles.span}>Discover
            <i className="bi bi-caret-right-fill">
            </i>Animals
          </span>
          <h2>Animals</h2>

          <div className={styles.contain}>
            <div >
              <img src={Mamba} />
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>Reptiles</h3>
              <Link className={styles.btn} to={'#'}>Find out more</Link>
            </div>
          </div>

          <div id={styles.contain_card} className={styles.contain}>
            <div >
              <img src={Turtle} />
            </div>

            <div className={styles.text}>
              <h3 className={styles.title2}>Aquatic</h3>
              <Link className={styles.btn2} to={'#'}>Find out more</Link>
            </div>
          </div>

          <div className={styles.contain}>
            <div>
              <img src={Giraffe} />
            </div>
            <div className={styles.text}>
              <h3 className={styles.title3}>Herbivore</h3>
              <Link className={styles.btn3} to={'#'}>Find out more</Link>
            </div>
          </div>


          <div id={styles.contain_card} className={styles.contain}>
            <div >
              <img src={Lion} />
            </div>
            <div className={styles.text}>
              <h3 className={styles.title4}>Carnivore</h3>
              <Link className={styles.btn4} to={'#'}>Find out more</Link>
            </div>
          </div>


        </section>
      </main>

      <Footer />
    </>
  );

}