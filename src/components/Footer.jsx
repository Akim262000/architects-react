import footerLogo from "../images/footer-logo.svg"
import facebook from "../images/facebook-icon.svg"
import twitter from "../images/twitter-icon.svg"
import linkedIn from "../images/linked-in-icon.svg"
import pinterest from "../images/pinterest-icon.svg"
import location from "../images/location-icon.svg"
import call from "../images/call-icon.svg"
import letter from "../images/letter-icon.svg"


function Footer() {
  return (
    <>
    <footer class="bg-gray-three mt-120">
      <div class="container pt-58 pb-60">
        <div class="row justify-content-between d-flex">
          <div class="col-6 col-sm-6 col-lg-auto order-3 order-lg-1 mt-5 mt-lg-0">
            <a href="./index.html" title="Ссылка на главную">
              <img src={footerLogo} alt="Footer logo" />
            </a>
          </div>
          <div class="col-12 col-sm-6 col-lg-2 order-2">
            <h5 class="font-16 fw-bold text-white mb-4 text-center text-md-start">Information</h5>
            <ul class="list-unstyled mb-0">
              <li class="mb-3 text-center text-md-start">
                <a class="font-14 fw-medium lh-24 text-white text-decoration-none" href="./index.html">Main</a>
              </li>
              <li class="mb-3 text-center text-md-start">
                <a class="font-14 fw-medium lh-24 text-white text-decoration-none" href="./gallery.html">Gallery</a>
              </li>
              <li class="mb-3 text-center text-md-start">
                <a class="font-14 fw-medium lh-24 text-white text-decoration-none" href="./our-projects.html">Projects</a>
              </li>
              <li class="mb-3 text-center text-md-start">
                <a class="font-14 fw-medium lh-24 text-white text-decoration-none" href="./certifications.html">Certifications</a>
              </li>
              <li class="text-center text-md-start">
                <a class="font-14 fw-medium lh-24 text-white text-decoration-none" href="./contacts.html">Contacts</a>
              </li>
            </ul>
          </div>
          <div
            class="col-12 col-sm-6 col-lg-3 order-2 order-lg-3 d-flex flex-column justify-content-between align-items-center align-items-lg-start mt-4 mt-sm-0 pt-4 pt-sm-0 border-top-gray-one"
          >
            <h5 class="font-16 fw-bold text-white mb-4 text-center text-md-start">Contacts</h5>
            <div class="h-100 d-flex flex-column justify-content-between">
              <div class="d-flex flex-row align-items-start justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                <img class="me-3" src={location} alt="Location icon" />
                <span class="font-14 fw-medium text-white lh-24"
                  >1234 Sample Street<br />
                  Austin Texas 78704</span
                >
              </div>
              <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                <img class="me-3" src={call} alt="Call icon" />
                <span class="font-14 fw-medium text-white lh-24">512.333.2222</span>
              </div>
              <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <img class="me-3" src={letter} alt="Letter icon" />
                <span class="font-14 fw-medium text-white lh-24">sampleemail@gmail.com</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-sm-5 col-lg-2 order-4 d-flex flex-column justify-content-center justify-content-sm-start mt-5 mt-lg-0">
            <h5 class="font-16 fw-bold text-white mb-4 text-center text-md-start">Social Media</h5>
            <div class="d-flex flex-row justify-content-between">
              <a href="#"><img src={facebook} alt="facebook-icon" /></a>
              <a href="#"><img src={twitter} alt="twitter-icon" /></a>
              <a href="#"><img src={linkedIn} alt="linked-in-icon" /></a>
              <a href="#"><img src={pinterest} alt="pinterest-icon" /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="border-top-gray-two pb-4 w-100 bg-gray-three">
        <div class="d-flex justify-content-center mt-4">
          <span class="font-16 fw-normal text-gray-two me-2"> Frontend development: </span>
          <a class="font-16 fw-normal text-gray-two mb-0 text-decoration-none" target="_blank"  rel="noopener noreferrer" href="https://github.com/Akim262000/Habitus"
            >Akim</a
          >
        </div>
        <div class="d-flex justify-content-center">
          <span class="font-16 fw-normal text-gray-two mb-0 me-2">Landing Page Design by:</span>
          <a
            class="font-16 fw-normal text- text-gray-two mb-0 text-decoration-none"
              target="_blank"  rel="noopener"
            href="https://www.figma.com/design/vHV13KD2TOtlvm1n3xFVDo/Website-of-architects---free-website--Community-?node-id=0-1&p=f&t=MblR5Kl3qfoM6JiS-0"
            >Юрий Лобыкин</a
          >
        </div>
        <p class="font-16 fw-normal text-gray-two text-center mt-3">© 2026 All Rights Reserved</p>
      </div>
    </footer>
    </>
  )
}

export default Footer;