
import styles from "./styles/info.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mamba from "./assets/blackMamba.jpeg";

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

     </section>
    </main>
 
   <Footer/>
   </>
  );
  
}