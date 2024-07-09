"use client";

import { Carousel } from "react-bootstrap";

import GreenBtn from "@/elements/GreenBtn";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Carousel>
        <Carousel.Item className="carousel-item1 vh-100">
          <Carousel.Caption className="h-100 d-flex flex-column align-items-center justify-content-top">
            <div className="row h-100">
              <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-capitalize text-start">
                  Find your perfect holiday
                </h1>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, harum. Sapiente cum voluptatem fuga quod eveniet
                  voluptatum asperiores ut ad.
                </p>
                <GreenBtn btnTitle="check our holiday" link="/holidays" />
              </div>
              <div className="col-lg-6 d-none d-lg-block"></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item2 vh-100">
          <Carousel.Caption className="h-100">
            <div className="row h-100">
              <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-capitalize text-start">
                  Do you Need a city break?
                </h1>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, harum. Sapiente cum voluptatem fuga quod eveniet
                  voluptatum asperiores ut ad.
                </p>
                <GreenBtn btnTitle="our city break" link="/citybreaks" />
              </div>
              <div className="col-lg-6 d-none d-lg-block"></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item3 vh-100">
          <Carousel.Caption className="h-100">
            <div className="col-lg-6 d-none d-lg-block"></div>
            <div className="row h-100">
              <div className="col-lg-6 d-flex flex-column align-items-end justify-content-center">
                <h1 className="text-capitalize text-start">Travel anywhere</h1>
                <p className="text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, harum. Sapiente cum voluptatem fuga quod eveniet
                  voluptatum asperiores ut ad.
                </p>
                <GreenBtn
                  btnTitle="check all destinations"
                  link="/destinations"
                />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
