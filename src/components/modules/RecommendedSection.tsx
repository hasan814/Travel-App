import { Container } from "react-bootstrap";

import Link from "next/link";
import { RecommendedSectionProps } from "src/types";

const RecommendedSection = ({
  itemRecommendedTitle,
}: RecommendedSectionProps) => {
  return (
    <div className="recommended-section">
      <Container className="position-relative py-5 rounded">
        <div className="bg-shape position-absolute"></div>
        <div className="row justify-content-end">
          <div className="col-md-6 col-lg-3 z-2">
            <h3 className="text-light text-capitalize fw-semibold">
              {itemRecommendedTitle}
            </h3>
            <p className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in
              reiciendis delectus similique exercitationem laudantium eos earum
              rem magnam repellat.
            </p>
            <Link
              className="text-light text-capitalize text-decoration-none fw-semibold"
              href={"/"}
            >
              Book Now
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RecommendedSection;
