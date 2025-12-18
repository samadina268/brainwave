import { Link } from "react-router-dom"


const Header = () => {
  return (
    
    <div className="w-75 mx-auto">
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <Link className="navbar-brand header-logo fw-bolder" to="#">
            Brainwave.io
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link nav-list" href="#hero">
                  Demos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-list" href="#ourStory">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-list" href="#caseStudies">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-list" href="#footer">
                  contact
                </a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <button className="btn  btn-outline-success nav-btn " type="submit">
                Get started a project
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
