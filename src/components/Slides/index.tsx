import styles from './slides.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import slidesData from '../../data/slides.json';
import { EffectFade } from 'swiper/modules';


// Importe todas as imagens necessárias
import Tiger from '../../assets/tiger.jpeg';
import Lizard from '../../assets/lizard.jpeg';
import Alce from '../../assets/moose.jpeg';
import Elefante from '../../assets/elefante.jpeg';
import Tucano from '../../assets/tucano.jpeg';
import { Link } from 'react-router-dom';


// Cria um mapeamento entre o nome do arquivo e a importação
const imageMap: { [key: string]: string } = {
  'tiger.jpeg': Tiger,
  'lizard.jpeg': Lizard,
  'moose.jpeg': Alce,
  'elefante.jpeg': Elefante,
  'tucano.jpeg': Tucano

}

const Home = () => {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const { items: data } = slidesData;

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>

      <div className={styles.main}>
        <Swiper
          modules={[EffectFade]}
          effect={'fade'}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <div className={styles.carousel}>
                <div className={styles.list}>
                  <div className={styles.item}>
                    <img className={styles.img} alt={item.title} src={imageMap[item.src]} />
                    <div className={styles.content}>
                      <div className={styles.author}>{item.author}</div>
                      <div className={styles.title}>{item.title}</div>
                      <div className={styles.topic}>{item.topic}</div>
                      <div className={styles.description}>
                        {item.description}
                      </div>
                      <div className={styles.buttons}> 
                        <Link to={'/cart/components/Home.jsx'}>teste</Link>                                            
                        <button className={styles.btn}>See more</button>
                        <button className={styles.btn}>Tickets</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  );
};

export default Home;