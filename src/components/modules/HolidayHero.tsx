import { HolidayHeroProps } from "src/types";
import { Container } from "react-bootstrap";

const HolidayHero = ({ secondHeroTitle }: HolidayHeroProps) => {
  return (
    <div className="second-hero-section">
      <Container className="h-100 d-flex align-items-center justify-content-center text-light">
        <h1 className="text-capitalize">{secondHeroTitle}</h1>
      </Container>
    </div>
  );
};

export default HolidayHero;
