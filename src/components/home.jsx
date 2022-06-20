import Header from './header';
import Carousel from './carousel';
import Contactform from './Contactform';
import Timelineads from './timelineads';
import Review from './review';
import Subintro from './subintro';
import Footer from './footer';
const Home = ({ show, setShow }) => {
  return (
    <>
      <main className="App">
        <Header setShow={setShow} />
        <Contactform show={show} setShow={setShow} />
        <Carousel />
        <section>
          <Subintro />
        </section>
        <article className="servicetimeline">
          <Timelineads />
        </article>
        <article>
          
          <Review />1
        </article>
      </main>
      <Footer />
    </>
  );
};
export default Home;
