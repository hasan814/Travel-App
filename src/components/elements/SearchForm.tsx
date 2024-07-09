"use client";

import { Button, Container, Form } from "react-bootstrap";
import { useRef } from "react";

const SearchForm = () => {
  // =========== Ref ============
  const checkInRef = useRef<HTMLInputElement | null>(null);
  const checkOutRef = useRef<HTMLInputElement | null>(null);

  // =========== Rendering ============
  return (
    <div className="position-relative">
      <Container>
        <Form className="search-form d-lg-flex align-items-center justify-content-center mx-auto p-4 mt-4 mt-lg-0 z-2 rounded">
          <div className="col-lg-2">
            <Form.Select>
              <option>Search place</option>
              <option value="1">London</option>
              <option value="2">Dubai</option>
              <option value="3">Paris</option>
            </Form.Select>
          </div>
          <div className="col-lg-2 mx-lg-3 my-2 my-lg-0">
            <Form.Select>
              <option>Rooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </div>
          <div className="col-lg-2">
            <Form.Control
              type="text"
              ref={checkInRef}
              placeholder="Check-In Date"
              onFocus={() => {
                if (checkInRef.current) checkInRef.current.type = "date";
              }}
              onBlur={() => {
                if (checkInRef.current) checkInRef.current.type = "date";
              }}
            />
          </div>
          <div className="col-lg-2 mx-lg-3 my-2 my-lg-0">
            <Form.Control
              type="text"
              ref={checkOutRef}
              placeholder="Check-Out Date"
              onFocus={() => {
                if (checkOutRef.current) checkOutRef.current.type = "date";
              }}
              onBlur={() => {
                if (checkOutRef.current) checkOutRef.current.type = "date";
              }}
            />
          </div>
          <Button variant="dark" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SearchForm;
