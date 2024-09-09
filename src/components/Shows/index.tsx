import { Link } from 'react-router-dom';
import styles from './shows.module.css';
import pic from './assets/piquinique.jpg'

import  walk from './assets/walk.jpg';


export default function Shows() {
  return (
    <section className={styles.container}>
      <div>
        <span className={styles.title}>Upcoming events</span>
        <h2 className={styles.text}>Join us!</h2>
      </div>

        <div className={styles.cards}>

             <div>
              <img src={pic} alt={'descrcao'} />              
          
            </div>

            <div>
            <span className={styles.containDescription}>descricao</span>
            </div>

            <div className={styles.contain}>              
              <span className={styles.containDate}>
                data
                <i className="bi bi-calendar3"></i>               
              </span>
            </div>

            <div className={styles.icon}>
              <i className="bi bi-caret-right-fill"></i>
            </div>


         </div>


         <div className={styles.cards}>

<div>
 <img src={pic} alt={'descrcao'} />              

</div>

<div>
<span className={styles.containDescription}>descricao</span>
</div>

<div className={styles.contain}>              
 <span className={styles.containDate}>
   data
   <i className="bi bi-calendar3"></i>               
 </span>
</div>

<div className={styles.icon}>
 <i className="bi bi-caret-right-fill"></i>
</div>


</div>




<div className={styles.cards}>

<div>
 <img src={walk} alt={'descrcao'} />              

</div>

<div>
<span className={styles.containDescription}>descricao</span>
</div>

<div className={styles.contain}>              
 <span className={styles.containDate}>
   data
   <i className="bi bi-calendar3"></i>               
 </span>
</div>

<div className={styles.icon}>
 <i className="bi bi-caret-right-fill"></i>
</div>


</div>
     

      <div>
        <Link className={styles.container__link} to={'/'}>Find out more</Link>
      </div>

    </section>
  );
}
