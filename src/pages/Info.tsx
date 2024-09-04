
import styles from "./styles/info.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mamba from "./assets/blackMamba.jpeg";
import Turtle from "./assets/tataruga.jpeg";
import Giraffe from "./assets/giraffe.jpg";

export default function Info() {
  return (
    <>
    <Navbar/>
    <main>
    <section className={styles.container}>
      <div>
        <img src={Mamba}/>
      </div>
      <div>
        <p>Descripcion</p>
      </div>


      <div>
        <img src={Turtle}/>
      </div>
      <div>
        <p>Descripcion</p>
      </div>


      <div>
        <img src={Giraffe}/>
      </div>
      <div>
        <p>Descripcion</p>
      </div>
      

     </section>
    </main>
 
   <Footer/>
   </>
  );
  
}