import { Fragment } from "react";
import Slider from "react-slick/lib/slider";
import { Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./Video.css";

const Video = () => {
  const [DataVideo, setDataVideo] = useState();
  const axios = require("axios");
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/Video-gallery?instansi_id=12")
      .then(function (response) {
        // handle success
        console.log(response);
        setDataVideo(response.data.data.data);
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
                <strong>Gallery Video</strong>
              </h1>
            </div>

            <Slider {...settings}>
              {console.log(DataVideo)}
              {console.log("console Gallery :" + DataVideo)}
              {DataVideo &&
                DataVideo.map((item, index) => {
                  return item.image_gallery_item.map((itm, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="width-full">
                          <iframe
                            id="player"
                            type="text/html"
                            src={`https://www.youtube.com/embed/${item.video_url}?`}
                            className="player-wrapper"
                            style={{ width: "100%", height: "100%" }}
                            frameBorder="0"
                          ></iframe>
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

export default Video;
