import FooterSocial from "../assets/images/footerSocial.png";
import { useState } from "react";

const Footer = () => {
  const [clickBtn , setClickBtn] = useState("Get started a project")

  return (
    <div className="footer-main-box" id="footer">
      <div className="row pt-5 pt mx-auto w-75 justify-content-between d-flex align-items-center">
        <div className="col-12 col-lg-7 mt-3">
          <h3 className="foot-main-h3">Ready to launch your next project?</h3>
          <p className="foot-main-note">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div className="col-12 col-lg-4 mt-4 mt-lg-0">
          <button
            className="btn cu-btn btn-outline-success nav-btn "
            type="submit" onClick={() => setClickBtn("project started")}
          >
            {clickBtn} 
          </button>
        </div>
      </div>
      <br /> <br /> <hr className="w-75 foot-hr mx-auto " /> <br />
      <div className="row mt-4 mx-auto gap-3 justify-content-between ps-4 pe-3 ms-4 me-3 mt-4 gap-5">
        <div className="col-12 col-lg-3 col-md-12 mx-auto">
          <h2 className="foot-h2 mx-md-auto text-center text-lg-start">Brainwave.io</h2>
          <p className=" foot-h2-note mt-3 text-center text-lg-start">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>

          <div className="footerSocial mt-4 mx-auto mx-lg-0 mt-lg-2">
            <img
              src={FooterSocial}
              alt="socials logo"
              loading="lazy"
              className="w-100"
            />
          </div>
        </div>

         <div className="col-12 col-lg-8 col-md-12 mt-4 mt-lg-0">

          <div className="row mx-auto justify-content-center ">

            <div className="col-12 col-sm-12 col-md-5">
              <div className="row mx-auto ">

              <div className="col-6">
                  <h3 className="foot-li-h3">Company</h3>
              <ul className="list-unstyled">
                <li className="foot-li mt-3">About us</li>
                <li className="foot-li ">Contact us</li>
                <li className="foot-li ">Careers</li>
                <li className="foot-li ">Press</li>
              </ul>
              </div>
              <div className="col-6">
                <h3 className="foot-li-h3">Product</h3>
              <ul className="list-unstyled">
                <li className="foot-li mt-3 ">Features</li>
                <li className="foot-li ">Pricing</li>
                <li className="foot-li ">News</li>
                <li className="foot-li ">Help desk</li>
                <li className="foot-li ">Support</li>
              </ul>
              </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6">
              <div className="row mx-auto">
                
                <div className="col-6">
                   <h3 className="foot-li-h3">Services</h3>
              <ul className="list-unstyled">
                <li className="foot-li mt-3 ">Digital Marketing</li>
                <li className="foot-li ">Content Writing</li>
                <li className="foot-li ">SEO for Business</li>
                <li className="foot-li ">UI Design</li>
              </ul>
                </div>

              <div className="col-6">
               <h3 className="foot-li-h3">Legal</h3>
              <ul className="list-unstyled">
                <li className="foot-li mt-3 ">Privacy Policy</li>
                <li className="foot-li ">Terms & Conditions</li>
                <li className="foot-li ">Return Policy</li>
              </ul>
              </div>
              </div>

            </div>

          </div>
        </div>
      </div>
     <br/>
    </div>
  );
};

export default Footer;

