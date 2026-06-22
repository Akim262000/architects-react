import logoHeader from "../images/architects-logo.svg"

function Header() {
  return (
    <header class="header mt-30 mb-30">
      <nav class="navbar navbar-expand-xl navbar-light p-0">
        <div class="container d-flex flex-row justify-content-between">
          <a class="navbar-brand" href="/#">
            <img src={logoHeader} alt="Header logo" />
          </a>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="burger-menu collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div class="border-menu navbar-nav">
              <a
                class="nav-link active font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 me-50 text-center text-xl-start"
                href="/#"
              >
                Main
              </a>
              <a
                class="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 me-50 text-center text-xl-start"
                href="/#"
              >
                GALLERY
              </a>
              <a
                class="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 me-50 text-center text-xl-start"
                href="/#"
              >
                PROJECTS
              </a>
              <a
                class="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 me-50 text-center text-xl-start"
                href="/#"
              >
                CERTIFICATIONS
              </a>
              <a
                class="nav-link font-12 fw-normal text-gray-one lh-12 ls-20 text-uppercase py-2 px-3 text-center text-xl-start"
                href="/#"
              >
                COntacts
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
