import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Slides from '../components/Slides';

const Home = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Slides/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;