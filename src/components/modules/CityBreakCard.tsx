"use client";

import { Card } from "react-bootstrap";
import { cityBreakCardType } from "src/types";

const CityBreakCard = ({
  itemImage,
  itemPrice,
  itemTitle,
  itemSubTitle,
  itemNights,
}: cityBreakCardType) => {
  // ============ Constant =============
  const imageSrc = typeof itemImage === "string" ? itemImage : itemImage.src;
  // ============ Rendering =============
  return (
    <div className="col-md-6 col-lg-4">
      <Card className="shadow h-100 overflow-hidden">
        <Card.Img className="img-hover" variant="top" src={imageSrc} />
        <Card.Body className="p-4">
          <Card.Title className="text-start text-uppercase fw-bold wb-0">
            {itemTitle}
          </Card.Title>
          <Card.Text className="text-start mb-0">{itemSubTitle}</Card.Text>
          <div className="d-flex justify-content-between mt-4">
            <Card.Text>{itemNights}</Card.Text>
            <Card.Text>
              from <span className="fw-bold ms-1 text-green">{itemPrice}</span>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CityBreakCard;
