import Navbar from '../Navbar/Navbar'; // Import Navbar
import HeroSection from '../HeroSection/HeroSection';  // Import HeroSection
import Footer from '../Footer/Footer';
import Features from '../Features/Features';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
  return (
    <div>
      <Navbar />  {/* Add the Navbar here */}
      <HeroSection />  {/* Add the HeroSection here */}
      <Features />
      <AboutUs />
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default Home;