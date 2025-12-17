
import Header from "./component/Header.jsx";
import Hero from "./component/Hero.jsx";
import OurServices from "./component/OurServices.jsx";
import OurStory from "./component/OurStory.jsx";
import ChooseUs from "./component/ChooseUs.jsx";
import CaseStudies from "./component/CaseStudies.jsx";
import Testimonial from "./component/Testimonial.jsx";
import Footer from "./component/Footer.jsx";

const Home = () => {
    
  return (
    <div>  
        <div className="land-Bg">
        <Header />
        <Hero />
      </div>

      <OurServices />
      <OurStory />
      <ChooseUs />
      <CaseStudies />
      <Testimonial />
      <Footer />
      
    </div>
  )
}

export default Home
