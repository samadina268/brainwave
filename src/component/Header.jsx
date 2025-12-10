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
                <Link className="nav-link nav-list" to="#">
                  Demos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-list" to="#">
                  Pages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-list" to="#">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-list" to="#">
                  contact
                </Link>
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
