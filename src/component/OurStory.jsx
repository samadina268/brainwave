import Oser1 from "../assets/images/oser-img-1.png"
import Oser2 from "../assets/images/oser-img-2.png"
import Oser3 from "../assets/images/oser-img-3.png"
import OserDot from "../assets/images/Oser-dot.png"

const OurStory = () => {
  return (
    <div className="w-75 mx-auto position-relative">
      <div>
       
        <h4 className="Ostory-main-h4 text-uppercase mt-5">Our story</h4>
        <p className="Ostory-main-note mt-4">We know how everything works and why your business is failing over and over again.</p>
      </div>

      <div className="row justify-content-between mt-lg-5"> 
        <div className="col-12  col-lg-5 mt-lg-5 g-4">
          <img src={Oser1} alt="our story first image" loading="lazy" className="w-100 mt-lg-5" />
        </div>

        <div className="col-lg-7 d-none d-lg-flex ">
          <div className="row justify-content-between">
            <div className="col-12 col-md-4 col-lg-7 d-none d-md-block ">
               <img src={Oser2} alt="our story second image" loading="lazy" className="w-100" />
               <div>
                <img src={OserDot} alt="our story second image" loading="lazy" className=" position-absolute oserdot-style"  />
               </div>
            </div>
            <div className="col-12 col-lg-4 d-none d-lg-block">
              <img src={Oser3} alt="our story third image" loading="lazy" className="w-100 mt-5 pt-5" />
            </div>
            <div className="col-12">
               <p className="mt-4 Ostory-img-note">We share common trends and strategies for improving your rental income and making sure you stay in high demand. With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 pt-5 justify-content-between"> 
        <div className="col-12 col-sm-4">
          <h3 className="Ostory-footer-h3 text-center">1M+</h3>
          <p className="Ostory-footer-note text-center">Customers visit Omega every month to get their service done.</p>

        </div>
        <div className="col-12 col-sm-4 mt-5 mt-sm-0">
          <h3 className="Ostory-footer-h3 text-center">92%</h3>
          <p className="Ostory-footer-note text-center">Satisfaction rate comes from our awesome customers.</p>
        </div>
        <div className="col-12 col-sm-4 mt-5 mt-sm-0">
          <h3 className="Ostory-footer-h3 text-center">4.9/5.0</h3>
          <p className="Ostory-footer-note text-center">Average customer ratings we have got all over internet.</p>
        </div>
      </div>

    </div>
  )
}

export default OurStory

