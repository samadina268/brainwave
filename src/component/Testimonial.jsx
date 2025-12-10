import Tespfp from "../assets/images/tes-pfp.png"

const Testimonial = () => {
  return (
    <div className="mt-5 mx-auto tes-bg">

       <h2 className=" tes-h2 text-uppercase mx-auto text-center">TEStimonial</h2>
       <p className="text-center mt-4 w-75 tes-note text-uppercase mx-auto ">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>

       <div>
        <figure>
            <div className="col-2 mx-auto pt-4"><img src={Tespfp} alt="ian klein pfp" loading="lazy" className="w-100" /></div>
            <figcaption className=" mx-auto text-center mt-3 ">
                
               <span className="d-block pt-2 tes-pfp-name  ">Ian klein</span>
               <span className="d-block pt-2 tes-pfp-span ">Digital Marketer</span>
            </figcaption>
        </figure>
       </div>
       <br /> <br /><br />

    </div>
  )
}

export default Testimonial
