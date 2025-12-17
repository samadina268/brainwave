import Os1 from "../assets/images/Os1.png"
import Os2 from "../assets/images/Os2.png"
import Os3 from "../assets/images/Os3.png"
import pfp from "../assets/images/Os-Part2-pfp.png"
import star from "../assets/images/Os-part2-star.png"
import OsDot from "../assets/images/os-bot.png"
import { useState } from "react"


const OurServices = () => {

  const [osCard, setosCard] = useState([
    setosCard({
      id: 1,
    headline: "GraphicDesign",
    img: Os1,
    note: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    bgColor: "#68D585",
    },

    {
      id: 2,
    headline: "GraphicDesign",
    img: Os2,
    note: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
     bgColor: "#473BF0",
    },

    {
      id: 3,
    headline: "GraphicDesign",
    img: Os3,
    note: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
     bgColor: "#F64B4B",
    })

  ])
 

  return (
    
    <div className="position-relative">

   
      
      {/* part 1 */}
      <div>
        <h4 className="w-75 mt-3 pt-4 text-uppercase text-center mx-auto Os-headline">our services</h4>
        <h1 className="w-75 Os-h1 text-center mx-auto">We provide great services for our customers based on needs</h1>

        <div className="row w-75 mx-auto Os-main-box justify-content-lg-between mt-3 pt-5 px-5 pe-lg-0 ps-lg-0 ">
          {osCard.map(eachItems =>{
            return   <div key={eachItems.id} className=" Os-box col-12 col-sm-12 col-md-12  rounded-3  text-center col-lg-4 mt-5 mt-lg-0 pt-5 pt-lg-0" style={{backgroundColor: eachItems.bgColor}}>
                <div className="d-block mx-auto pt-5 pb-4 ps-4 pe-4">
                    <img src={eachItems.img} alt="Os1 image"  loading="lazy" className="w-50 "/>

                </div>    
                    <h3 className="Os-h3 mt-4">{eachItems.headline}</h3>
                    <p className="Os-note mt-4">{eachItems.note}</p>
                    <a href="#" className="mt-4 d-block text-decoration-none Os-a">Learn more <span className="ps-3">➞</span> </a> <br /><br />

                
            </div> 
          })}

          

        </div>


      </div>
     <div className="d-none d-lg-block">
      <img src={OsDot} alt="our story second image" loading="lazy" className=" position-absolute osdot-style"  />
      </div> 


      {/* part 2 */}

        <div className="row mt-5 pt-5 w-75 mx-auto Os-part2-main mx-auto justify-content-center gap-3">
          <div className="col-3 d-flex justify-content-center align-items-center" >
            <img src={pfp} alt="profile pics" loading="lazy" className="w-100" />
          </div >
          <div className="col-7">

            <div className=" w-25">
              
                <img src={star} alt="profile pics" loading="lazy" className="w-100" />
            
            </div>

            

            <p className="mt-3 Os-part2-note">“OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.”</p>

            <p className="Os-part2-footer"><strong>Franklin Hicks</strong>  Web Devoloper</p>
            <br />

          </div>
      


      <hr className="w-75" />
    
         

         
        </div>

      <div>

      </div>


    </div>
  )
}

export default OurServices