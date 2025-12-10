import DpIcon from "../assets/images/dp-icon.png"
import EfIcon from "../assets/images/ef-icon.png"
import OtIcon from "../assets/images/ot-icon.png"
import NsIcon from "../assets/images/ns-icon.png"
import WcuDot from "../assets/images/wcu-dot.png"

const ChooseUs = () => {
  return (
    <div className="cu-main position-relative">
      
         <h4 className="text-uppercase mx-auto text-center cu-h4 mt-5 pt-5 w-75">why choose us</h4>
        <p className="chooseUs-p mx-auto pt-2 w-75">People choose us because we serve the best for everyone</p>

        <div className="row w-75 justify-content-center mx-auto mt-5 g-5">

            <div className="col-12 col-md-12 col-lg-5">
                <div className="row">
                    <div className="col-3">
                        <img src={DpIcon} alt="dp icon" loading="lazy" className="w-100" />
                    </div>
                    <div className="col-9">
                        <h2 className="cu-h2">Dedicated project manager</h2>
                        <p className="cu-note ">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-12 col-lg-5">
                <div className="row">
                    <div className="col-3">
                        <img src={OtIcon} alt="dp icon" loading="lazy" className="w-100" />
                    </div>
                    <div className="col-9">
                        <h2 className="cu-h2">Organized tasks</h2>
                        <p className="cu-note ">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-12 col-lg-5">
                <div className="row">
                    <div className="col-3">
                        <img src={EfIcon} alt="dp icon" loading="lazy" className="w-100" />
                    </div>
                    <div className="col-9">
                        <h2 className="cu-h2">Easy feedback sharing</h2>
                        <p className="cu-note ">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-12 col-lg-5">
                <div className="row">
                    <div className="col-3">
                        <img src={NsIcon} alt="dp icon" loading="lazy" className="w-100" />
                    </div>
                    <div className="col-9">
                        <h2 className="cu-h2">Never miss deadline</h2>
                        <p className="cu-note ">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    </div>
                </div>
            </div>
           
        </div>
        <br /><br />

        <hr className="w-75  mx-auto" />
         <br /> 
        <div className="row mt-5 pt mx-auto w-75 justify-content-between d-flex align-items-center">
            <div className="col-12 col-lg-7">
                <h3 className="rtl-h3">Ready to launch your next project?</h3>
                <p className="rtl-note">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>
            <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                <button className="btn btn-outline-success nav-btn mt-2 cu-btn" type="submit">
               Get started a project 
              </button>
            </div>
        </div>


        <div className="d-none d-lg-block ">
            <img src={WcuDot} alt="our story second image" loading="lazy" className="position-absolute  WcuDot-style"  />
        </div>  
<br /><br />
      
    </div>
  )
}

export default ChooseUs