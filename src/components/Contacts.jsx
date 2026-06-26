function Contacts() {
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
              <div className="mb-4 mb-lg-0">
                <h5 className="font-18 fw-bold text-gray-one mb-0">
                  Company Name:
                </h5>
                <p className="font-16 fw-light text-gray-one mb-0">
                  1234 Sample Street Austin Texas 76401
                </p>
              </div>
              <div className="mb-4 mb-lg-0">
                <h5 className="font-18 fw-bold text-gray-one mb-0">
                  Phone number:
                </h5>
                <p className="font-18 fw-light text-gray-one mb-0">512.333.2222</p>
              </div>
              <div className="mb-4 mb-lg-0">
                <h5 className="font-18 fw-bold text-gray-one mb-0">Email:</h5>
                <a
                  href="mailto:sampleemail@gmail.com"
                  className="font-16 fw-light text-gray-one mb-0 text-decoration-none"
                >
                  sampleemail@gmail.com
                </a>
              </div>

              <button
                className="font-12 fw-normal lh-12 ls-20 text-white bg-dark-gray py-30 px-5 text-uppercase border-0 contact-us-btn"
                type="submit"
              >
                Contact US
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8196.318164122766!2d-97.74779869820196!3d30.26195444020331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20Sample%20Street%20Austin%20Texas%2076401!5e0!3m2!1sru!2sru!4v1781853924194!5m2!1sru!2sru"
              className="border-black w-100"
              height="500"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
