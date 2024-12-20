// app/page.tsx

import Navbar from './components/Navbar/Navbar';  // Import Navbar
import HeroSection from './components/HeroSection/HeroSection';  // Import HeroSection
import Footer from './components/Footer/Footer';
import Features from './components/Features/Features';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';

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
