import { Container } from "react-bootstrap";
import CityBreakCard from "./CityBreakCard";
import { parisCityBreakCards } from "@/utils/helper";

const ParisBreakSection = () => {
  return (
    <div className="city-break-section my-4 my-sm-5">
      <Container>
        <h3 className="mb-4 mb-sm-5 text-start text-uppercase fw-semibold">
          Paris city breaks
        </h3>
        <div className="row g-4">
          {parisCityBreakCards.map((item) => (
            <CityBreakCard
              key={item.id}
              itemTitle={item.itemTitle}
              itemSubTitle={item.itemSubTitle}
              itemNights={item.itemNights}
              itemImage={item.itemImage}
              itemPrice={item.itemPrice}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ParisBreakSection;
