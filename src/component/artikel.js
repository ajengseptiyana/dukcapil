import "./artikel.css";
import { Col, Row, Card, Container } from "react-bootstrap";
import { Fragment } from "react";
import React, { useEffect, useState } from "react";

const Artikel = () => {
  const [DataArtikel, setDataArtikel] = useState([]);
  const [DataArtikelTerkini, setDataArtikelTerkini] = useState([]);
  const axios = require("axios");
  //  ambil api berita Populer
  useEffect(() => {
    axios
      .get(
        "http://adminmesuji.embuncode.com/api/article?instansi_id=2&per_page=3&sort_type=desc&sort_by=created_at"
      )
      .then(function (Artikel) {
        // handle success
        setDataArtikel(Artikel.data.data.data);
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
        "http://adminmesuji.embuncode.com/api/article?instansi_id=2&per_page=4&sort_type=desc&sort_by=total_hit"
      )
      .then(function (terkini) {
        // handle success
        setDataArtikelTerkini(terkini.data.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  // fungsi
  function getData() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("/user?ID=12345")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <Container>
      <Fragment>
        <div className="bg-artikel">
          <Row>
            <Col xs={8}>
              <div className="artikel-terkini">
                <h2 className="text-artikel">Artikel Populer</h2>
                {console.log("console Artikel :" + DataArtikel)}
                {DataArtikel &&
                  DataArtikel.map((item, index) => {
                    return (
                      <Row>
                        <Col xs={12}>
                          <div className="box-artikel">
                            <Card className="cimory">
                              <Card.Img
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
              <h2 className="text-artikel">Artikel Terbaru</h2>
              <div className="artikel-terbaru">
                {console.log("console Artikel Terkini :" + DataArtikelTerkini)}
                {DataArtikelTerkini &&
                  DataArtikelTerkini.map((item, index) => {
                    return (
                      <Row>
                        <Col xs={12}>
                          <div className="artikel-ku">
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

export default Artikel;
