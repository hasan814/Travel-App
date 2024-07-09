"use client";

import { Button, Card } from "react-bootstrap";
import { RecentHolidayCardProps } from "src/types";

const RecentHolidayCard = ({
  itemTitle,
  itemDescription,
  itemNights,
  itemPrice,
  itemImage,
}: RecentHolidayCardProps) => {
  return (
    <div className="col-lg-6">
      <Card className="shadow d-flex flex-sm-row h-100 overflow-hidden">
        <div className={`img-div img-hover col-sm-6 ${itemImage}`}></div>
        <div className="col-sm-6">
          <Card.Body className="p-4">
            <Card.Title className="text-start text-uppercase fw-bold">
              {itemTitle}
            </Card.Title>
            <ul className="list-unstyled">
              <li className="text-start item-description">{itemDescription}</li>
              <li className="text-start item-nights">{itemNights}</li>
              <li className="text-start price text-green">{itemPrice}</li>
            </ul>
            <Button variant="dark">View Now</Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default RecentHolidayCard;
