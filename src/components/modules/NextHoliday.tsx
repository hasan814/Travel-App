import { nextHoliday } from "@/utils/helper";
import { Container } from "react-bootstrap";

import NextHolidayCard from "./NextHolidayCard";

const NextHoliday = () => {
  return (
    <div className="next-holiday-section my-4 my-sm-5">
      <Container>
        <h2 className="text-uppercase fw-semibold mb-4 mb-sm-5">
          Next Holiday
        </h2>
        <div className="row g-4">
          {nextHoliday.map((item) => (
            <NextHolidayCard key={item.id} itemTitle={item.itemTitle} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NextHoliday;
