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
import { useState } from "react";

function App() {
  // const [user, setUser] = useState({
  //   id: 1,
  //   userName: "abubakar",
  //   email: "abubakar23@gmail.com",

  // })

  // const [theme, setTheme] = useState("light")

  

 

  return (
    <Allcontext.Provider>

        <div>

      <div className="land-Bg">
        <BrowserRouter>
      <Header />
    </BrowserRouter>
    
    <Hero/>
      </div>

    <OurServices/>
    <OurStory/>
    <ChooseUs/>
    <CaseStudies/>
    <Testimonial/>
    <Footer/>
    </div>
    </Allcontext.Provider>
   
  );
}

export default App;