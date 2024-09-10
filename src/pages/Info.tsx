
import styles from "./styles/info.module.css";
import Navbar from "../components/Navbar";
import MainBar from "../components/MainBar";
import Footer from "../components/Footer";
import Mamba from "./assets/blackMamba.jpeg";
import Turtle from "./assets/tataruga.jpeg";
import Giraffe from "./assets/giraffe.jpg";
import Lion from "./assets/lion.jpeg";

export default function Info() {
  return (
    <>
    <Navbar/>
    <MainBar/>
    <main>
    <section className={styles.container}>

      <div className={styles.contain}>
      <div >
        <img src={Mamba}/>
      </div>
      <div>
        <p>Descripcion</p>
      </div>
      </div>

      <div id={styles.contain_card} className={styles.contain}>
      <div >
        <img src={Turtle}/>
      </div>

      <div>
        <p>Descripcion</p>
      </div>
      </div>

      <div className={styles.contain}>
      <div >
        <img src={Giraffe}/>
      </div>
      <div>        
        <p>Descripcion</p>
      </div>
      </div>


      <div id={styles.contain_card} className={styles.contain}>
      <div >
        <img src={Lion}/>
      </div>
      <div>        
        <p>Descripcion</p>
      </div>
      </div>
      

     </section>
    </main>
 
   <Footer/>
   </>
  );
  
}