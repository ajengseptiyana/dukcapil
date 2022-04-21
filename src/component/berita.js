import "./berita.css";
import { Col, Row, Card, Container } from "react-bootstrap";
import { Fragment } from "react";
import React, { useEffect, useState } from "react";

const Berita = () => {
  const [DataBerita, setDataBerita] = useState([]);
  const [DataBeritaTerkini, setDataBeritaTerkini] = useState([]);
  const axios = require("axios");
  //  ambil api berita Populer
  useEffect(() => {
    axios
      .get(
        "http://adminmesuji.embuncode.com/api/news?instansi_id=2&per_page=3&sort_type=desc&sort_by=created_at"
      )
      .then(function (Berita) {
        // handle success
        setDataBerita(Berita.data.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  // Api terkini
  useEffect(() => {
    axios
      .get(
        "http://adminmesuji.embuncode.com/api/news?instansi_id=2&per_page=4&sort_type=desc&sort_by=total_hit"
      )
      .then(function (terkini) {
        // handle success
        setDataBeritaTerkini(terkini.data.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <Container>
      <Fragment>
        <div className="bg-berita">
          <Row>
            <Col xs={8}>
              <div className="berita-terkini">
                <h2 className="text-berita">Berita Populer</h2>
                {console.log("console berita :" + DataBerita)}
                {DataBerita &&
                  DataBerita.map((item, index) => {
                    return (
                      <Row>
                        <Col xs={12}>
                          <div className="box-berita">
                            <Card className="cimory">
                              <Card.Img
                                className="gambar"
                                variant="top"
                                src={item.image_file_data}
                              />
                              <Card.Body className="bg">
                                <Card.Title>
                                  <h4>
                                    <strong> {item.title}</strong>{" "}
                                  </h4>
                                </Card.Title>
                                <Card.Text>{item.intro}</Card.Text>
                                <a className="text-read" href="">
                                  Read more
                                </a>
                              </Card.Body>
                            </Card>
                          </div>
                        </Col>
                      </Row>
                    );
                  })}
              </div>
            </Col>
            <Col xs={4}>
              <h2 className="text-berita">Berita Terbaru</h2>
              <div className="berita-terbaru">
                {console.log("console berita :" + DataBeritaTerkini)}
                {DataBeritaTerkini &&
                  DataBeritaTerkini.map((item, index) => {
                    return (
                      <Row>
                        <Col xs={12}>
                          <div className="berita-ku">
                            <Row>
                              <Col sm={4}>
                                {" "}
                                <Card.Img
                                  variant="top"
                                  src={item.image_file_data}
                                />
                              </Col>
                              <Col sm={8}>
                                <h6>
                                  <strong> {item.title} </strong>
                                </h6>
                                <p> {item.created_at}</p>
                                <a href="">Read more</a>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    );
                  })}
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    </Container>
  );
};

export default Berita;
