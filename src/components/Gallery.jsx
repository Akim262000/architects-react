import galerryOne from "../images/gallery-1.jpg"
import galerryTwo from "../images/gallery-2.jpg"
import galerryThree from "../images/gallery-3.jpg"
import galerryFour from "../images/gallery-4.jpg"
import galerryFive from "../images/gallery-5.jpg"
import line from "../images/line.svg";

function Gallery() {
  return (
    <>
      <section className="gallery">
        <h2
          className="font-64 fw-light lh-64 text-gray-two mb-60 d-none d-md-block"
        >
          Photo<br /><span className="text-black fw-bold">Gallery</span>
        </h2>
        <h2
          className="font-64 fw-light lh-64 text-gray-two mb-60 d-block d-md-none"
        >
          Photo <span className="text-black fw-bold">Gallery</span>
        </h2>
        <div className="row gy-4 gx-4">
          <div className="col-sm-6 col-md-4 col-2-4">
            <img
              className="w-100 h-100 object-fit-cover"
              src={galerryOne}
              alt=""
            />
          </div>
          <div className="col-sm-6 col-md-4 col-2-4">
            <img
              className="w-100 h-100 object-fit-cover"
              src={galerryTwo}
              alt=""
            />
          </div>
          <div className="col-sm-6 col-md-4 col-2-4">
            <img
              className="w-100 h-100 object-fit-cover"
              src={galerryThree}
              alt=""
            />
          </div>
          <div className="col-sm-6 col-md-4 col-2-4">
            <img
              className="w-100 h-100 object-fit-cover"
              src={galerryFour}
              alt=""
            />
          </div>
          <div className="col-sm-6 col-md-4 col-2-4">
            <img
              className="w-100 h-100 object-fit-cover"
              src={galerryFive}
              alt=""
            />
          </div>
          <div className="col-sm-6 col-md-4 col-2-4">
            <img
              className="w-100 h-100 object-fit-cover"
              src={galerryFive}
              alt=""
            />
          </div>
          <div className="col-sm-6 col-md-4 col-2-4">
            <img
              className="w-100 h-100 object-fit-cover"
              src={galerryFour}
              alt=""
            />
          </div>
          <div className="col-sm-6 col-md-4 col-2-4">
            <img
              className="w-100 h-100 object-fit-cover"
              src={galerryThree}
              alt=""
            />
          </div>
          <div className="col-sm-6 col-md-4 col-2-4">
            <img
              className="w-100 h-100 object-fit-cover"
              src={galerryTwo}
              alt=""
            />
          </div>
          <div className="col-sm-6 col-md-4 col-2-4">
            <img
              className="w-100 h-100 object-fit-cover"
              src={galerryOne}
              alt=""
            />
          </div>
        </div>
        <div
          className="d-flex flex-row justify-content-around justify-content-md-start mt-60 w-100"
        >
          <div className="d-flex align-items-center me-30">
            <span className="font-24 fw-normal text-gray-two lh-24 me-4">01</span>
            <img src={line} alt="" />
            <span className="font-24 fw-normal text-gray-two lh-24 ms-4">05</span>
          </div>
          <div className="project-slider-navigation d-flex">
            <button className="prev-arrow" aria-label="Предыдущий слайд"></button>
            <button className="next-arrow" aria-label="Следующий слайд"></button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
