import footerLogo from "../images/footer-logo.svg";
import facebook from "../images/facebook-icon.svg";
import twitter from "../images/twitter-icon.svg";
import linkedIn from "../images/linked-in-icon.svg";
import pinterest from "../images/pinterest-icon.svg";
import location from "../images/location-icon.svg";
import call from "../images/call-icon.svg";
import letter from "../images/letter-icon.svg";
import { Link } from "react-router";

function Footer() {
  return (
    <>
      <footer className="bg-gray-three mt-120">
        <div className="container pt-58 pb-60">
          <div className="row justify-content-between d-flex">
            <div className="col-6 col-sm-6 col-lg-auto order-3 order-lg-1 mt-5 mt-lg-0">
              <a href="./index.html" title="Ссылка на главную">
                <img src={footerLogo} alt="Footer logo" />
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-2 order-2">
              <h5 className="font-16 fw-bold text-white mb-4 text-center text-md-start">
                Information
              </h5>
              <nav className="list-unstyled mb-0">
                <li className="mb-3 text-center text-md-start">
                  <Link
                    className="font-14 fw-medium lh-24 text-white text-decoration-none"
                    to="/"
                  >
                    Main
                  </Link>
                </li>
                <li className="mb-3 text-center text-md-start">
                  <Link
                    className="font-14 fw-medium lh-24 text-white text-decoration-none"
                    to="/gallery"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="mb-3 text-center text-md-start">
                  <Link
                    className="font-14 fw-medium lh-24 text-white text-decoration-none"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li className="mb-3 text-center text-md-start">
                  <Link
                    className="font-14 fw-medium lh-24 text-white text-decoration-none"
                    to="/certifications"
                  >
                    Certifications
                  </Link>
                </li>
                <li className="text-center text-md-start">
                  <Link
                    className="font-14 fw-medium lh-24 text-white text-decoration-none"
                    to="/contacts"
                  >
                    Contacts
                  </Link>
                </li>
              </nav>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 order-2 order-lg-3 d-flex flex-column justify-content-between align-items-center align-items-lg-start mt-4 mt-sm-0 pt-4 pt-sm-0 border-top-gray-one">
              <h5 className="font-16 fw-bold text-white mb-4 text-center text-md-start">
                Contacts
              </h5>
              <div className="h-100 d-flex flex-column justify-content-between">
                <div className="d-flex flex-row align-items-start justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                  <img className="me-3" src={location} alt="Location icon" />
                  <span className="font-14 fw-medium text-white lh-24">
                    1234 Sample Street
                    <br />
                    Austin Texas 78704
                  </span>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                  <img className="me-3" src={call} alt="Call icon" />
                  <span className="font-14 fw-medium text-white lh-24">
                    512.333.2222
                  </span>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <img className="me-3" src={letter} alt="Letter icon" />
                  <span className="font-14 fw-medium text-white lh-24">
                    sampleemail@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-5 col-lg-2 order-4 d-flex flex-column justify-content-center justify-content-sm-start mt-5 mt-lg-0">
              <h5 className="font-16 fw-bold text-white mb-4 text-center text-md-start">
                Social Media
              </h5>
              <div className="d-flex flex-row justify-content-between">
                <Link to="/#">
                  <img src={facebook} alt="facebook-icon" />
                </Link>
                <Link to="/#">
                  <img src={twitter} alt="twitter-icon" />
                </Link>
                <Link to="/#">
                  <img src={linkedIn} alt="linked-in-icon" />
                </Link>
                <Link to="/#">
                  <img src={pinterest} alt="pinterest-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top-gray-two pb-4 w-100 bg-gray-three">
          <div className="d-flex justify-content-center mt-4">
            <span className="font-16 fw-normal text-gray-two me-2">
              {" "}
              Frontend development:{" "}
            </span>
            <a
              className="font-16 fw-normal text-gray-two mb-0 text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Akim262000/Habitus"
            >
              Akim
            </a>
          </div>
          <div className="d-flex justify-content-center">
            <span className="font-16 fw-normal text-gray-two mb-0 me-2">
              Landing Page Design by:
            </span>
            <a
              className="font-16 fw-normal text- text-gray-two mb-0 text-decoration-none"
              target="_blank"
              rel="noopener"
              href="https://www.figma.com/design/vHV13KD2TOtlvm1n3xFVDo/Website-of-architects---free-website--Community-?node-id=0-1&p=f&t=MblR5Kl3qfoM6JiS-0"
            >
              Юрий Лобыкин
            </a>
          </div>
          <p className="font-16 fw-normal text-gray-two text-center mt-3">
            © 2026 All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
