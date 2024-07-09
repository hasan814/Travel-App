import Link from "next/link";
import { Container } from "react-bootstrap";

const NeedInspirationSection = () => {
  return (
    <div className="need-inspiration-section py-5 position-relative">
      <div className="bg-shape position-absolute"></div>
      <Container>
        <div className="row">
          <div className="col-md-4 z-2">
            <h2 className="text-start text-light fw-semibold">
              Need Inspiration?
            </h2>
            <p className="text-start text-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nam
              magni modi repellendus harum? Et unde consequuntur vitae ut ipsam.
            </p>
            <div className="d-flex">
              <h5 className="text-light text-capitalize fw-semibold text-nowrap">
                Call us:
              </h5>
              <Link
                href={"/"}
                className="text-light mx-2 text-decoration-none h5 fw-semibold"
              >
                +971526244459
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NeedInspirationSection;
