import AbImg from "../assets/images/ab-img.png"
import AbsImg from "../assets/images/abs-img.png"
import MgImg from "../assets/images/mg-img.png"
import GWImg from "../assets/images/GW-img.png"

const CaseStudies = () => {
  return (
    <div>
        <h3 className="mx-auto mt-5 text-center cs-h3">Case Studies</h3>
        <h2 className="mx-auto mt-4 w-75 text-center cs-h2">Our works describe why we are the best in the business</h2>

       <div className="w-75 mx-auto row cs-main-box g-4 g-lg-5 mt-4 ps-md-4">
        <div className="col-12 col-lg-6">
            <figure>
                <img src={AbImg} alt="Aura branding image" loading="lazy" className="w-100 cs-img" />
                <figcaption>
                  <div className="ps-3 figcap-main pt-4">
                    <span className="fig-span d-block " >Graphic Design</span>
                  Aura Branding Design</div>
                </figcaption>
            </figure>

            <figure>
                <img src={GWImg} alt="Aura branding image" loading="lazy" className="w-100 cs-img mt-3" />
                <figcaption>
                  <div className="ps-3 figcap-main pt-4">
                    <span className="fig-span d-block">Graphic Design</span>
                Gradient Website Development
                  </div>
                </figcaption>
            </figure>

            
        </div>


        <div className="col-12 col-lg-6">
            <figure>
                <img src={AbsImg} alt="Aura branding image" loading="lazy" className="w-100 cs-img" />
                <figcaption>
                 <div className="ps-3 figcap-main pt-4">
                   <span className="fig-span d-block">Graphic Design</span>
                  AB.S Snack Packaging
                 </div>
                </figcaption>
            </figure>

            <figure>
                <img src={MgImg} alt="Aura branding image" loading="lazy" className="w-100 cs-img mt-3" />
                <figcaption>
                  <div className="ps-3 figcap-main pt-4">
                    <span className="fig-span d-block">Graphic Design</span>
                 Magazine Content Writing
                  </div>
                </figcaption>
            </figure>
        </div>
        
        
       </div>

       <footer ><a className="mt-5 text-decoration-none text-center mx-auto w-75 d-block" href="#">See all works  <span>➞</span> </a></footer> 
       <br />
      
    </div>
  )
}

export default CaseStudies
