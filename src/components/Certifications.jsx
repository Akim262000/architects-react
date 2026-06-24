import certification from "../images/certification.jpg"

function Certifications() {
  return (
    <>
      <section class="certifications">
        <h2 class="font-64 fw-light lh-64 text-gray-two mb-60 d-none d-md-block">
          Company
          <br />
          <span class="text-black fw-bold">Certifications</span>
        </h2>
        <h2 class="font-64 fw-light lh-64 text-gray-two mb-60 d-block d-md-none">
          Company <span class="text-black fw-bold">Certifications</span>
        </h2>
        <div class="row gy-4 gx-4">
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="border-black">
              <img
                class="w-100 object-fit-cover"
                src={certification}
                alt=""
              />
              <div class="py-4 px-3 bg-gray-four">
                <h5 class="font-18 fw-bold text-gray-one mb-0 text-center">
                  Certification 1
                </h5>
                <p class="font-16 fw-light text-gray-one mb-0 text-center">
                  Certification subtitle
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="border-black">
              <img
                class="w-100 object-fit-cover"
                src={certification}
                alt=""
              />
              <div class="py-4 px-3 bg-gray-four">
                <h5 class="font-18 fw-bold text-gray-one mb-0 text-center">
                  Certification 2
                </h5>
                <p class="font-16 fw-light text-gray-one mb-0 text-center">
                  Certification subtitle
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="border-black">
              <img
                class="w-100 object-fit-cover"
                src={certification}
                alt=""
              />
              <div class="py-4 px-3 bg-gray-four">
                <h5 class="font-18 fw-bold text-gray-one mb-0 text-center">
                  Certification 3
                </h5>
                <p class="font-16 fw-light text-gray-one mb-0 text-center">
                  Certification subtitle
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="border-black">
              <img
                class="w-100 object-fit-cover"
                src={certification}
                alt=""
              />
              <div class="py-4 px-3 bg-gray-four ">
                <h5 class="font-18 fw-bold text-gray-one mb-0 text-center">
                  Certification 4
                </h5>
                <p class="font-16 fw-light text-gray-one mb-0 text-center">
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
