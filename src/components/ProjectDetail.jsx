import test from "../images/test.jpeg"
import test2 from "../images/test-2.jpg"

export default function ProjectDetail() {
  return (
    <section className="our-projects-detail">
      <h2 className="font-64 fw-light lh-64 text-gray-two mb-60 d-none d-md-block">
        Sample
        <br />
        <span className="text-black fw-bold">Project 1</span>
      </h2>
      <h2 className="font-64 fw-light lh-64 text-gray-two mb-60 d-block d-md-none">
        Sample <span className="text-black fw-bold">Project 1</span>
      </h2>
      <div className="row gy-4 mt-60">
        <div className="col-12">
          <img className="project-detail-top" src={test} alt="" />
        </div>
        <div className="col-12 col-md-6 col-xl-4">
          <img
            className="project-detail-center"
            src={test2}
            alt=""
          />
        </div>
        <div className="col-12 col-md-6 col-xl-8">
          <p className="font-16 fw-light text-black lh-24 mb-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with.
          </p>
        </div>
        <div className="col-12">
          <img
            className="project-detail-bottom w-100 object-fit-cover"
            src={test}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
