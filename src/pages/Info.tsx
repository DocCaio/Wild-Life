
import styles from "./info.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mamba from "../assets/blackMamba.jpeg";

export default function Info() {
  return (
    <>
    <Navbar/>
    <main>
    <section className={styles.container}>
    <img src={Mamba}/>
     </section>
    </main>
 
   <Footer/>
   </>
  );
  
}