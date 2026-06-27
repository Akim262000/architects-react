import { useState } from "react";
import closeIcon from "../images/close-icon.svg"
import okImg from "../images/modal-ok.png"

function Contacts() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowContactModal(false);
    setShowSuccessModal(true);
  };

  return (
    <>
      <section className="contacts">
        <div className="row">
          <h2 className="font-64 fw-light lh-64 text-gray-two mb-60 d-block d-md-none text-start">
            Contact <span className="text-black fw-bold">Information</span>
          </h2>

          <div className="col-12 col-lg-5 d-flex mb-5 mb-lg-0">
            <div className="d-flex flex-column justify-content-between h-100">
              <h2 className="font-64 fw-light lh-64 text-gray-two d-none d-md-block">
                Contact
                <br />
                <span className="text-black fw-bold">Information</span>
              </h2>

              <div className="mb-4">
                <h5 className="font-18 fw-bold text-gray-one mb-0">
                  Company Name:
                </h5>
                <p className="font-16 fw-light text-gray-one mb-0">
                  1234 Sample Street Austin Texas 76401
                </p>
              </div>

              <div className="mb-4">
                <h5 className="font-18 fw-bold text-gray-one mb-0">
                  Phone number:
                </h5>
                <p className="font-18 fw-light text-gray-one mb-0">
                  512.333.2222
                </p>
              </div>

              <div className="mb-4">
                <h5 className="font-18 fw-bold text-gray-one mb-0">
                  Email:
                </h5>
                <a
                  href="mailto:sampleemail@gmail.com"
                  className="font-16 fw-light text-gray-one text-decoration-none"
                >
                  sampleemail@gmail.com
                </a>
              </div>

              <button
                className="font-12 fw-normal lh-12 ls-20 text-white bg-dark-gray py-30 px-5 text-uppercase border-0"
                onClick={() => setShowContactModal(true)}
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8196.318164122766!2d-97.74779869820196!3d30.26195444020331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Sample%20Street%20Austin%20Texas%2076401!5e0!3m2!1sru!2sru!4v1781853924194!5m2!1sru!2sru"
              className="border-black w-100"
              height="500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Модалка с формой */}
      {showContactModal && (
        <div
          className="modal"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="modal-content position-relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="close position-absolute"
              src={closeIcon}
              alt="Close"
              onClick={() => setShowContactModal(false)}
              style={{
                width: "24px",
                height: "24px",
                cursor: "pointer",
                top: "15px",
                right: "15px",
              }}
            />

            <h3 className="font-22 fw-bold text-gray-one text-center mb-4">
              Contact Us
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-2">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Product/Service of interest"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <textarea
                  placeholder="Message"
                  className="form-control"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="font-12 fw-normal lh-12 ls-20 bg-dark-gray text-white text-uppercase py-3 w-100 border-0"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Модалка "Спасибо" */}
      {showSuccessModal && (
        <div
          className="modal"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className="modal-content position-relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="close position-absolute"
              src={closeIcon}
              alt="Close"
              onClick={() => setShowSuccessModal(false)}
              style={{
                cursor: "pointer",
                top: "15px",
                right: "15px",
              }}
            />

            <img
              className="mx-auto mt-3 d-block"
              src={okImg}
              width="142"
              alt=""
            />

            <h3 className="font-22 fw-bold text-gray-one text-center mb-4 mt-3">
              Thank you!
            </h3>

            <p className="font-14 fw-medium text-gray-one text-center mt-3 mb-5">
              Your message has been sent. We will contact you soon!
            </p>

            <button
              type="button"
              className="font-12 fw-normal lh-12 ls-20 bg-dark-gray text-white text-uppercase py-3 w-100 border-0"
              onClick={() => setShowSuccessModal(false)}
            >
              Come Back
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contacts;