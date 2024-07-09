"use client";

import { HolidayPlanSectionProps } from "src/types";
import { Container } from "react-bootstrap";

import GreenBtn from "@/elements/GreenBtn";

const HolidayPlanSection = ({
  itemHolidayPlanTitle,
}: HolidayPlanSectionProps) => {
  return (
    <div className="holiday-plan-section py-5">
      <Container className="h-100 d-flex flex-column align-items-start justify-content-end">
        <h3 className="text-start text-light text-capitalize fw-semibold">
          {itemHolidayPlanTitle}
        </h3>
        <p className="text-start text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          praesentium possimus rem nesciunt, quisquam officiis voluptatem fugit
          qui iste ex.
        </p>
        <GreenBtn btnTitle="Check summer Deals" link="/" />
      </Container>
    </div>
  );
};

export default HolidayPlanSection;
