import { NavLink } from "react-router";
import logoHeader from "../images/architects-logo.svg"


function Header() {
  return (
    <header className="header mt-30 mb-30">
      <nav className="navbar navbar-expand-xl navbar-light p-0">
        <div className="container d-flex flex-row justify-content-between">
          <a className="navbar-brand" href="/#">
            <img src={logoHeader} alt="Header logo" />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="burger-menu collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <nav className="border-menu navbar-nav">
              <NavLink className="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 me-50 text-center text-xl-start" to="/">Main</NavLink>
              <NavLink className="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 me-50 text-center text-xl-start" to="/gallery">GALLERY</NavLink>
              <NavLink className="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 me-50 text-center text-xl-start" to="/projects">PROJECTS</NavLink>
              <NavLink className="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 me-50 text-center text-xl-start" to="/certifications">CERTIFICATIONS</NavLink>
              <NavLink className="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 text-center text-xl-start" to="/contacts">COntacts</NavLink>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
