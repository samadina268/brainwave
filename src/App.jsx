import "./App.css";
import Header from "./component/Header.jsx";  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./component/Hero.jsx";
import OurServices from "./component/OurServices.jsx";
import OurStory from "./component/OurStory.jsx"
import ChooseUs from "./component/ChooseUs.jsx"
import CaseStudies from "./component/CaseStudies.jsx"
import Testimonial from "./component/Testimonial.jsx";
import Footer from "./component/Footer.jsx";
import Allcontext from "./Context/AllContext.jsx";
import Home from "./component/home.jsx"


function App() {
  

  return (
    
        <div> 
     <Routes>
      <Route path="/" element={<Home/>}/>
     </Routes>
    </div>
  
  );
}

export default App;