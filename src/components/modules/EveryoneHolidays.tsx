import { holidayEveryone } from "@/utils/helper";
import { Container } from "react-bootstrap";

import EveryoneHolidaysCard from "./EveryoneHolidaysCard";

const EveryoneHolidays = () => {
  return (
    <div className="everyone-holidays-section my-4 my-sm-5">
      <Container>
        <h2 className="text-uppercase fw-semibold mb-4 mb-sm-5">
          Holidays for everyone
        </h2>
        <div className="row g-4">
          {holidayEveryone.map((item) => (
            <EveryoneHolidaysCard
              key={item.id}
              itemTitle={item.itemTitle}
              itemSubTitle={item.itemSubTitle}
              itemPrice={item.itemPrice}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default EveryoneHolidays;
