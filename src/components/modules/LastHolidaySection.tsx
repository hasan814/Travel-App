import { holidayItems } from "@/utils/helper";
import { Container } from "react-bootstrap";

import LastHolidayCard from "./LastHolidayCard";

const LastHolidaySection = () => {
  return (
    <div className="last-holidays-section my-4 my-sm-5">
      <Container>
        <h2 className="text-uppercase fw-semibold my-4 my-sm-5 pt-lg-4">
          Last minute holidays
        </h2>
        <div className="row g-4">
          {holidayItems.map((item) => (
            <LastHolidayCard
              key={item.id}
              itemImage={item.itemImage}
              itemTitle={item.itemTitle}
              itemDescription={item.itemDescription}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LastHolidaySection;
