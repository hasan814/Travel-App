"use client";

import { Button, Container, Nav, Navbar } from "react-bootstrap";

import Link from "next/link";
import Image from "next/image";

import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="position-absolute w-100 z-2">
      <Container>
        <Navbar.Brand className="text-light">
          <Link href={"/"} className="text-decoration-none text-light d-flex">
            <Image
              src={"/Icons/airplane.svg"}
              alt="logo"
              priority
              width={30}
              height={30}
            />
            React Travel
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-light"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-center">
            <Nav.Link href="/" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="/holidays" className="text-light">
              Holidays
            </Nav.Link>
            <Nav.Link href="/destinations" className="text-light">
              Destinations
            </Nav.Link>
            <Nav.Link href="/citybreaks" className="text-light">
              City Break
            </Nav.Link>
          </Nav>
          <Button variant="light">
            <Link
              href={"/signin"}
              className="text-decoration-none text-capitalize text-dark text-nowrap"
            >
              sign in
            </Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
