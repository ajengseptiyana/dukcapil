import Slider from "react-slick/lib/slider";
import "./gallery.css";
import React, { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Gallery = () => {
  const [DataGallery, setDataGallery] = useState();
  const axios = require("axios");
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=12")
      .then(function (gallery) {
        // handle success
        console.log(gallery);
        setDataGallery(gallery.data.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <Fragment>
      <div className="name-gallery-foto">
        <Container>
          <div className="bg-gallery-foto">
            <div className="text-gallery-foto">
              <h1>
                <strong>Gallery Foto</strong>
              </h1>
            </div>

            <Slider {...settings}>
              {console.log(DataGallery)}
              {console.log("console Gallery :" + DataGallery)}
              {DataGallery &&
                DataGallery.map((item, index) => {
                  return item.image_gallery_item.map((itm, index) => {
                    return (
                      <Fragment ke y={index}>
                        <div className="width-full1">
                          <img src={itm.image_file_data} />
                        </div>
                      </Fragment>
                    );
                  });
                })}
            </Slider>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};
export default Gallery;
