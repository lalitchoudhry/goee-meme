// COMPONENTS IMPORTS
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// SECTIONS IMPORTS
import Hero from "../pageSection/Hero";
import Characters from "../pageSection/Characters";
import Blog from "../pageSection/Blog";
import About from "../pageSection/About";
import Battleground from "../pageSection/Battleground";

const Home = () => {
  return (
    <div>
      <div className="bg-hero-banner bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <Characters />
      <div className="bg-card-gradient">
        <Battleground />
        <About />
      </div>
      {/* <Blog /> */}
      <Footer />
    </div>
  );
};

export default Home;
