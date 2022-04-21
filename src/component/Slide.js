import React, { Fragment } from "react";
import "./Slide.css";
import {
  Carousel,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

const Slide = () => {
  return (
    <Fragment>
      <div className="bg-slide">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://2.bp.blogspot.com/-dHzSjksGnXE/WkzCAfAmI8I/AAAAAAAAEY8/5XPy457IzLgKQ6gQDjOZNBtoYs9RneWiwCLcBGAs/s1600/IMG-20180103-WA0028.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i2.wp.com/www.sekilasindonesia.id/wp-content/uploads/2021/01/IMG_20210114_105754-1-scaled.jpg?resize=550%2C301&ssl=1"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.suara.com/pictures/970x544/2017/10/20/53003-pelayanan-ktp-elektronik.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="pencarian">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <i className="icon">Search</i>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default Slide;
