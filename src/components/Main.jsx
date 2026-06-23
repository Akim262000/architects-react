import projectOne from "../images/project-1.jpg";
import projectTwo from "../images/project-1.jpg";
import projectThree from "../images/project-1.jpg";
import line from "../images/line.svg";
import aboutOne from "../images/about-1.jpg";
import aboutTwo from "../images/about-2.jpg";
import aboutThree from "../images/about-3.jpg";
import arrowNext from "../images/arrow-next.svg"
import contactUs from "../images/contact-us.jpg"
import ourProjectOne from "../images/our-project-1.jpg"
import ourProjectTwo from "../images/our-project-2.jpg"
import ourProjectThree from "../images/our-project-3.jpg"
import ourProjectFour from "../images/our-project-4.jpg"
import ourProjectFive from "../images/our-project-5.jpg"
import arrowNextWhite from "../images/arrow-next-white.svg"
import React from "react";
import Slider from "react-slick";

const PrevArrow = (props) => {
  const { onClick } = props;
  return <button className="prev-arrow" onClick={onClick} aria-label="Предыдущий слайд"></button>;
};

const NextArrow = (props) => {
  const { onClick } = props;
  return <button className="next-arrow" onClick={onClick} aria-label="Следующий слайд"></button>;
};

function Main() {
  const settings = {
    arrows: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {" "}
      <section class="project">
        <div class="row d-flex align-items-end justify-content-between">
          <h2 class="font-64 fw-light lh-64 text-gray-two text-uppercase mb-3 d-block d-md-none">
            project <span class="text-black fw-bold">Lorem</span>
          </h2>
          <div class="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start order-2 order-md-1">
            <h2 class="font-64 fw-light lh-64 text-gray-two text-uppercase mb-0 d-none d-md-block">
              project<br /><span class="text-black fw-bold">Lorem</span>
            </h2>
            <div class="d-flex flex-row flex-md-column justify-content-around mt-150 mb-80 w-100">
              <div class="project-slider-navigation d-flex">
                <PrevArrow />
                <NextArrow />
              </div>
              <div class="d-flex align-items-center mt-90">
                <span class="font-24 fw-normal text-gray-two lh-24 me-4">01</span>
                <img src={line} alt="" />
                <span class="font-24 fw-normal text-gray-two lh-24 ms-4">03</span>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-7 order-1 order-md-2">
            <Slider className="project-slide-card" {...settings}>
              <img class="project" src={projectOne} alt="slide-1" />

              <img class="project" src={projectTwo} alt="slide-2" />
              <img class="project" src={projectThree} alt="slide-2" />
            </Slider>
          </div>
        </div>
      </section>
      <section class="about mt-120 py-30 px-70 bg-light-gray">
        <div class="row d-flex justify-content-between">
          <div class="col-7 d-none d-lg-flex d-xxl-none">
            <img src={aboutOne} alt="About image" />
          </div>
          <div class="col-7 d-none d-xxl-block">
            <div class="w-100 h-100 position-relative">
              <img className="about-img-one position-absolute" src={aboutOne} alt="About image" />
              <img class="about-img-two position-absolute" src={aboutTwo} alt="About image" />
              <img class="about-img-three position-absolute" src={aboutThree} alt="About image" />
            </div>
          </div>
          <div class="col-12 col-lg-5 d-flex flex-column align-items-start justify-content-end">
            <h2 class="font-64 fw-light lh-64 text-gray-two text-uppercase mb-20">about</h2>
            <img class="d-block d-lg-none mb-3 w-100" src={aboutOne} alt="About image" />
            <p class="about-subtitle font-16 fw-light lh-24 text-black mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <a class="font-12 fw-normal text-gray-one bg-white lh-12 py-4 ps-35 pe-64 text-decoration-none text-uppercase" href="/#">
              Read More
              <img class="ms-3" src={arrowNext} alt="arrow" />
            </a>
          </div>
        </div>
      </section>
      <section class="main-focus mt-150">
        <h2 class="font-64 fw-light lh-64 text-gray-two mb-60">Main Focus/Mission Statement</h2>
        <div class="row d-flex justify-content-between align-items-start">
          <div class="col-12 col-xl-4 d-flex align-items-center">
            <span class="font-200 fw-bolder text-gray-three lh-200 me-30">1</span>
            <p class="font-22 fw-normal lh-36 mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
            </p>
          </div>

          <div class="col-12 col-xl-6 d-flex align-items-center mt-4 mt-xl-0">
            <span class="font-200 fw-bolder text-gray-three lh-200 me-30">2</span>
            <p class="font-22 fw-normal lh-36 mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </div>
      </section>
      <section class="our-projects mt-120">
        <h2 class="font-64 fw-light lh-64 text-gray-two mb-60">Our Projects</h2>
        <div class="row gx-4 gy-4">
          <div class="col-12 col-md-6 d-flex">
            <a href="/#" class="h-100 w-100 our-project-one" aria-label="Посмотреть проект Sample Project">
              <img class="" src={ourProjectOne} alt="" />
              <div class="position-absolute top-0 mt-3 mt-lg-5 ms-80" style={{ zindex: "5" }}>
                <h3 class="font-64 fw-bold lh-64 text-white mb-0">
                  Sample
                  <br />
                  Project
                </h3>
                <div class="d-flex flex-row align-items-center mt-3">
                  <span class="font-12 fw-normal lh-12 ls-20 text-white">View More</span>
                  <img class="ms-20" src={arrowNextWhite} style={{ width: "24px", height: "24px" }} alt="" />
                </div>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-6 d-flex">
            <div class="h-100 w-100 our-project-two">
              <img class="" src={ourProjectTwo} alt="" />
            </div>
          </div>
          <div class="col-12 col-md-3 d-flex">
            <div class="h-100 w-100 our-project-three">
              <img class="" src={ourProjectThree} alt="" />
            </div>
          </div>
          <div class="col-12 col-md-5 d-flex">
            <div class="h-100 w-100 our-project-four">
              <img class="" src={ourProjectFour} alt="" />
            </div>
          </div>
          <div class="col-12 col-md-4 d-flex">
            <div class="h-100 w-100 our-project-five">
              <img class="" src={ourProjectFive} alt="" />
            </div>
          </div>
          <div class="col-auto ms-auto">
            <div class="py-4 px-40 bg-dark-gray">
              <a href="/#" class="font-12 fw-normal lh-12 ls-20 text-decoration-none text-white text-uppercase">
                All Projects
                <img class="ms-2" src={arrowNextWhite} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-us mt-120">
        <h2 class="font-64 fw-light lh-64 text-gray-two mb-4">Contact Us</h2>
        <div class="row">
          <div class="col-12 col-lg-5 order-2 order-lg-1">
            <form action="">
              <div class="mb-2">
                <input
                  class="form-control font-14 fw-normal text-gray-four w-100 bg-gray-four border-0 py-3 px-4"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div class="mb-2">
                <input
                  class="form-control font-14 fw-normal text-gray-four w-100 bg-gray-four border-0 py-3 px-4"
                  type="tel"
                  placeholder="Phone Number*"
                  required
                />
              </div>

              <div class="mb-2">
                <input
                  class="form-control font-14 fw-normal text-gray-four w-100 bg-gray-four border-0 py-3 px-4"
                  type="email"
                  placeholder="E-mail*"
                  required
                />
              </div>

              <div class="mb-2">
                <input
                  class="form-control font-14 fw-normal text-gray-four w-100 bg-gray-four border-0 py-3 px-4"
                  type="text"
                  placeholder="Interested In"
                />
              </div>
              <div class="">
                <textarea
                  class="form-control font-14 fw-normal text-gray-four contact-us-textarea w-100 bg-gray-four border-0 py-3 px-4"
                  style={{ height: "110px" }}
                  name=""
                  id=""
                  placeholder="Message*"
                  required
                ></textarea>
              </div>
            </form>
          </div>
          <div class="col-12 col-lg-7 order-1 order-lg-2 mb-4 mb-lg-0">
            <img class="w-100" src={contactUs} alt="" />
          </div>
          <div class="col-auto me-auto mt-80 order-3">
            <div class="">
              <button class="font-12 fw-normal lh-12 ls-20 text-decoration-none py-4 px-40 bg-dark-gray border-0 text-white text-uppercase">
                Send Email
                <img class="ms-2" src={arrowNextWhite} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
