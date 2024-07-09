"use client";

import { EveryoneHolidaysCardProps } from "src/types";
import { BiChevronRight } from "react-icons/bi";
import { Card } from "react-bootstrap";

const EveryoneHolidaysCard = ({
  itemTitle,
  itemSubTitle,
  itemPrice,
}: EveryoneHolidaysCardProps) => {
  return (
    <div className="col-md-6 col-xl-4">
      <Card className="shadow d-flex flex-sm-row overflow-hidden">
        <div className="image-div img-hover col-sm-6 d-flex align-items-center justify-content-center px-4 py-5">
          <h5 className="text-capitalize text-light">{itemTitle}</h5>
        </div>
        <div className="col-sm-6 d-flex align-items-center">
          <Card.Body className="p-4">
            <p className="mb-0 text-capitalize">{itemSubTitle}</p>
            <p className="price my-2 fw-bold text-green">{itemPrice}</p>
            <p className="mb-0">per person</p>
          </Card.Body>
          <BiChevronRight className="me-3" />
        </div>
      </Card>
    </div>
  );
};

export default EveryoneHolidaysCard;
