import HeroMainImg from "../assets/images/mainHeroImg1.png"
import { useState } from "react"
import { UseContext } from "react"
import Allcontext from "../Context/AllContext"

const Hero = () => {

  // const [projectBtn, setProjectBtn] = useState(10)

  // const handle = () =>{
  //   setProjectBtn((preValue) => preValue - 1)
  // }

  const [heroBefore, heroAfter ] = useState("Get started a project")
  
  // const {user} = useContext(Allcontext)

  return (
    <div id="hero">
        <div className="row w-75 mx-auto ps-5 pe-5 mt-5 pt-3 hero-main ">
            <div className="col-12 col-md-12 col-lg-7">
                <p className="text-uppercase hero-heading">Let’s shift your business</p>
                <h1 className="hero-h1">Shift your business fast with Shade Pro.</h1>
                <p className="hero-note">With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                <button onClick={() => heroAfter("Project started")} className="btn btn-outline-success nav-btn mt-2 hero-btn" type="submit">
                {heroBefore}
              </button>

              {/* <h1>Hello {user.userName}</h1> */}

            </div>

            

            <div className="col-12 col-md-12 col-lg-5 mt-5 mt-lg-0 pt-4 pt-lg-0">
                <img src={HeroMainImg} alt="Hero main img 1" loading="lazy" className="w-100 heroImage-1" />
            </div>

         
        </div>
        <br />

        {/* <div>
          {projectBtn}
          <button className="" onClick={handle}>
            increment</button>
        </div> */}
    </div>
  )
}

export default Hero
