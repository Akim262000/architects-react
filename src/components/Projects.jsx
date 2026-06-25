import { Link } from "react-router"

import projectOne from "../images/sample-project-1.jpg"
import projectTwo from "../images/sample-project-2.jpg"
import projectThree from "../images/sample-project-3.jpg"
import arrowNext from "../images/arrow-next.svg"
import line from "../images/line.svg";

function Projects() {
  return (
    <>
      <section class="our-projects">
        <h2 class="font-64 fw-light lh-64 text-gray-two mb-60 d-none d-md-block">
          Our
          <br />
          <span class="text-black fw-bold">Projects</span>
        </h2>
        <h2 class="font-64 fw-light lh-64 text-gray-two mb-60 d-block d-md-none">
          Our <span class="text-black fw-bold">Projects</span>
        </h2>
        <div class="row gy-4 gy-lg-5">
          <div class="col-12">
            <div class="row gx-0">
              <div class="col-12 col-lg-7">
                <img
                  class="w-100 h-100 object-fit-cover"
                  src={projectOne}
                  alt="Sample project"
                />
              </div>
              <div class="col-12 col-lg-5">
                <div class="d-flex flex-column justify-content-between align-items-start bg-gray-four p-30 h-100">
                  <h4 class="font-40 fw-light text-gray-two mb-0">
                    Sample Project
                  </h4>
                  <p class="font-16 fw-light text-black mb-0 lh-24 mt-4 mt-lg-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Link
                    class="font-12 fw-normal text-gray-one bg-white lh-12 py-4 ps-35 pe-64 ls-20 text-decoration-none text-uppercase mt-4 mt-lg-0"
                    to="/projects/project-detail"
                  >
                    View More
                    <img
                      class="ms-3"
                      src={arrowNext}
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row gx-0">
              <div class="col-12 col-lg-7">
                <img
                  class="w-100 h-100 object-fit-cover"
                  src={projectTwo}
                  alt="Sample project"
                />
              </div>
              <div class="col-12 col-lg-5">
                <div class="d-flex flex-column justify-content-between align-items-start bg-gray-four p-30 h-100">
                  <h4 class="font-40 fw-light text-gray-two mb-0">
                    Sample Project 2
                  </h4>
                  <p class="font-16 fw-light text-black mb-0 lh-24 mt-4 mt-lg-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Link
                    class="font-12 fw-normal text-gray-one bg-white lh-12 py-4 ps-35 pe-64 ls-20 text-decoration-none text-uppercase mt-4 mt-lg-0"
                    to="/projects/project-detail"
                  >
                    View More
                    <img
                      class="ms-3"
                      src={arrowNext}
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row gx-0">
              <div class="col-12 col-lg-7">
                <img
                  class="w-100 h-100 object-fit-cover"
                  src={projectThree}
                  alt="Sample project"
                />
              </div>
              <div class="col-12 col-lg-5">
                <div class="d-flex flex-column justify-content-between align-items-start bg-gray-four p-30 h-100">
                  <h4 class="font-40 fw-light text-gray-two mb-0">
                    Sample Project 3
                  </h4>
                  <p class="font-16 fw-light text-black mb-0 lh-24 mt-4 mt-lg-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Link
                    class="font-12 fw-normal text-gray-one bg-white lh-12 py-4 ps-35 pe-64 ls-20 text-decoration-none text-uppercase mt-4 mt-lg-0"
                    to="/projects/project-detail"
                  >
                    View More
                    <img
                      class="ms-3"
                      src={arrowNext}
                      alt="arrow"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-row justify-content-around justify-content-md-start mt-60 w-100">
          <div class="d-flex align-items-center me-30">
            <span class="font-24 fw-normal text-gray-two lh-24 me-4">01</span>
            <img src={line} alt="" />
            <span class="font-24 fw-normal text-gray-two lh-24 ms-4">05</span>
          </div>
          <div class="project-slider-navigation d-flex">
            <button class="prev-arrow" aria-label="Предыдущий слайд"></button>
            <button class="next-arrow" aria-label="Следующий слайд"></button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
