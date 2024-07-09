import { holidayData } from "@/utils/helper";
import { Container } from "react-bootstrap";
import RecentHolidayCard from "./RecentHolidayCard";

const RecentHolidaySection = () => {
  return (
    <div className="recent-holidays my-4 my-sm-5">
      <Container>
        <h2 className="text-uppercase fw-semibold mb-4 mb-sm-5">
          <div className="row g-5">
            {holidayData.map((item) => (
              <RecentHolidayCard
                key={item.id}
                itemImage={item.itemImage}
                itemTitle={item.itemTitle}
                itemDescription={item.itemDescription}
                itemNights={item.itemNights}
                itemPrice={item.itemPrice}
              />
            ))}
          </div>
        </h2>
      </Container>
    </div>
  );
};

export default RecentHolidaySection;
