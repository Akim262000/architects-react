import certification from "../images/certification.jpg"

function Certifications() {
  return (
    <>
      <section className="certifications">
        <h2 className="font-64 fw-light lh-64 text-gray-two mb-60 d-none d-md-block">
          Company
          <br />
          <span className="text-black fw-bold">Certifications</span>
        </h2>
        <h2 className="font-64 fw-light lh-64 text-gray-two mb-60 d-block d-md-none">
          Company <span className="text-black fw-bold">Certifications</span>
        </h2>
        <div className="row gy-4 gx-4">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="border-black">
              <img
                className="w-100 object-fit-cover"
                src={certification}
                alt=""
              />
              <div className="py-4 px-3 bg-gray-four">
                <h5 className="font-18 fw-bold text-gray-one mb-0 text-center">
                  Certification 1
                </h5>
                <p className="font-16 fw-light text-gray-one mb-0 text-center">
                  Certification subtitle
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="border-black">
              <img
                className="w-100 object-fit-cover"
                src={certification}
                alt=""
              />
              <div className="py-4 px-3 bg-gray-four">
                <h5 className="font-18 fw-bold text-gray-one mb-0 text-center">
                  Certification 2
                </h5>
                <p className="font-16 fw-light text-gray-one mb-0 text-center">
                  Certification subtitle
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="border-black">
              <img
                className="w-100 object-fit-cover"
                src={certification}
                alt=""
              />
              <div className="py-4 px-3 bg-gray-four">
                <h5 className="font-18 fw-bold text-gray-one mb-0 text-center">
                  Certification 3
                </h5>
                <p className="font-16 fw-light text-gray-one mb-0 text-center">
                  Certification subtitle
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="border-black">
              <img
                className="w-100 object-fit-cover"
                src={certification}
                alt=""
              />
              <div className="py-4 px-3 bg-gray-four ">
                <h5 className="font-18 fw-bold text-gray-one mb-0 text-center">
                  Certification 4
                </h5>
                <p className="font-16 fw-light text-gray-one mb-0 text-center">
                  Certification subtitle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certifications;
