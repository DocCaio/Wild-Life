import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Slides from '../components/Slides';
import News from '../components/News';
import Shows from '../components/Shows';

const Home = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Slides/>
        <News/>
        <Shows/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;