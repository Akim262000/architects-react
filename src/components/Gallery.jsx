import galerryOne from "../images/gallery-1.jpg"
import galerryTwo from "../images/gallery-2.jpg"
import galerryThree from "../images/gallery-3.jpg"
import galerryFour from "../images/gallery-4.jpg"
import galerryFive from "../images/gallery-5.jpg"
import line from "../images/line.svg";

function Gallery() {
  return (
    <>
      <section class="gallery">
        <h2
          class="font-64 fw-light lh-64 text-gray-two mb-60 d-none d-md-block"
        >
          Photo<br /><span class="text-black fw-bold">Gallery</span>
        </h2>
        <h2
          class="font-64 fw-light lh-64 text-gray-two mb-60 d-block d-md-none"
        >
          Photo <span class="text-black fw-bold">Gallery</span>
        </h2>
        <div class="row gy-4 gx-4">
          <div class="col-sm-6 col-md-4 col-2-4">
            <img
              class="w-100 h-100 object-fit-cover"
              src={galerryOne}
              alt=""
            />
          </div>
          <div class="col-sm-6 col-md-4 col-2-4">
            <img
              class="w-100 h-100 object-fit-cover"
              src={galerryTwo}
              alt=""
            />
          </div>
          <div class="col-sm-6 col-md-4 col-2-4">
            <img
              class="w-100 h-100 object-fit-cover"
              src={galerryThree}
              alt=""
            />
          </div>
          <div class="col-sm-6 col-md-4 col-2-4">
            <img
              class="w-100 h-100 object-fit-cover"
              src={galerryFour}
              alt=""
            />
          </div>
          <div class="col-sm-6 col-md-4 col-2-4">
            <img
              class="w-100 h-100 object-fit-cover"
              src={galerryFive}
              alt=""
            />
          </div>
          <div class="col-sm-6 col-md-4 col-2-4">
            <img
              class="w-100 h-100 object-fit-cover"
              src={galerryFive}
              alt=""
            />
          </div>
          <div class="col-sm-6 col-md-4 col-2-4">
            <img
              class="w-100 h-100 object-fit-cover"
              src={galerryFour}
              alt=""
            />
          </div>
          <div class="col-sm-6 col-md-4 col-2-4">
            <img
              class="w-100 h-100 object-fit-cover"
              src={galerryThree}
              alt=""
            />
          </div>
          <div class="col-sm-6 col-md-4 col-2-4">
            <img
              class="w-100 h-100 object-fit-cover"
              src={galerryTwo}
              alt=""
            />
          </div>
          <div class="col-sm-6 col-md-4 col-2-4">
            <img
              class="w-100 h-100 object-fit-cover"
              src={galerryOne}
              alt=""
            />
          </div>
        </div>
        <div
          class="d-flex flex-row justify-content-around justify-content-md-start mt-60 w-100"
        >
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

export default Gallery;
