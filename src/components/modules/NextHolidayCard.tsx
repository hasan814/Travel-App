import { NextHolidayCardtype } from "src/types";
import { Card } from "react-bootstrap";

const NextHolidayCard = ({ itemTitle }: NextHolidayCardtype) => {
  return (
    <div className="col-md-6 col-lg-4">
      <Card className="shadow d-flex align-items-center justify-content-end overflow-hidden p-4 border-0 img-hover">
        <h4 className="text-capitalize text-light text-center">{itemTitle}</h4>
      </Card>
    </div>
  );
};

export default NextHolidayCard;
