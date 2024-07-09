"use client";

import { LastHolidayCardProps } from "src/types";
import { Card } from "react-bootstrap";

import Link from "next/link";

const LastHolidayCard = ({
  itemImage,
  itemTitle,
  itemDescription,
}: LastHolidayCardProps) => {
  // =========== Constant ===========
  const imageSrc = typeof itemImage === "string" ? itemImage : itemImage.src;

  // =========== Rendering ===========
  return (
    <div className="col-lg-4">
      <Card>
        <Card.Img className="img-hover" variant="top" src={imageSrc} />
        <Card.Body className="p-4">
          <Card.Title className="text-start text-uppercase fw-bold">
            {itemTitle}
          </Card.Title>
          <Card.Text className="text-start">{itemDescription}</Card.Text>
          <Link href={"/"} className="text-green text-capitalize fw-semibold">
            Book Now
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LastHolidayCard;
