import "./App.css";
import Header from "./component/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Hero from "./component/Hero.jsx";
import OurServices from "./component/OurServices.jsx";
import OurStory from "./component/OurStory.jsx";
import ChooseUs from "./component/ChooseUs.jsx";
import CaseStudies from "./component/CaseStudies.jsx";
import Testimonial from "./component/Testimonial.jsx";
import Footer from "./component/Footer.jsx";
import Home from "./Home.jsx";
import Allcontext from "./Context/AllContext.jsx";

function App() {
  return (
    <div>
  
      
      <Routes>
        
        <Route path="/" element={<Home />} />
       <Route path="*" element={<p>This page is not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
