import { useState } from "react";
import { NavLink } from "react-router";
import logoHeader from "../images/architects-logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <header className="header py-30">
        <nav className="navbar navbar-expand-xl navbar-light p-0">
          <div className="container d-flex flex-row justify-content-between">
            <NavLink className="navbar-brand" to="/">
              <img src={logoHeader} alt="Header logo" />
            </NavLink>

            <button
              className={`navbar-toggler ${isOpen ? "open" : ""}`}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`burger-menu navbar-collapse justify-content-center ${
                isOpen ? "show d-block" : "collapse"
              }`}
            >
              <nav className="border-menu navbar-nav">
                <NavLink
                  className="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 me-50 text-center text-xl-start"
                  to="/"
                  onClick={() => setIsOpen(false)}
                >
                  MAIN
                </NavLink>

                <NavLink
                  className="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 me-50 text-center text-xl-start"
                  to="/gallery"
                  onClick={() => setIsOpen(false)}
                >
                  GALLERY
                </NavLink>

                <NavLink
                  className="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 me-50 text-center text-xl-start"
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                >
                  PROJECTS
                </NavLink>

                <NavLink
                  className="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 me-50 text-center text-xl-start"
                  to="/certifications"
                  onClick={() => setIsOpen(false)}
                >
                  CERTIFICATIONS
                </NavLink>

                <NavLink
                  className="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 text-center text-xl-start"
                  to="/contacts"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACTS
                </NavLink>
              </nav>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;