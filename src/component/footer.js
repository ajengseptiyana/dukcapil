import React, { useEffect, useState } from "react";
import "./footer.css";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  const [DataFooter, setDataFooter] = useState([]);
  const axios = require("axios");

  // Make a request for a user with a given ID
  useEffect(() => {
    axios
      .get("http://adminmesuji.embuncode.com/api/instansi/detail/12")
      .then(function (footer) {
        // handle success
        setDataFooter(footer.data.data);
        console.log("console footer :" + footer.data.data);
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
    <div className="footer">
      <Row className="bg-bawah">
        <Col xs={8}>
          <div className="container-logo-footer">
            <h1>{DataFooter.nama_instansi}</h1>
          </div>
        </Col>
        <Col xs={4} className="text-right">
          <img width={120} height={125} src={DataFooter.logo_instansi} />
        </Col>
        <Col className="container-text-footer" xs={12}>
          <Row>
            <Col xs={4} className="footer-contain">
              <h3 className="footer-contain-text">TENTANG</h3>
              <p className="footer-keterangan-dinas">{DataFooter.tentang}</p>
            </Col>
            <Col xs={4} className="footer-contain footer-margin-left">
              <h3 className="footer-contain-text">TENTANG</h3>
              <ul className="footer-list-margin">
                <li>
                  <a className="footer-href-text" href="">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="footer-href-text" href="">
                    Kepala Dinas
                  </a>
                </li>
                <li>
                  <a className="footer-href-text" href="">
                    Dokumen
                  </a>
                </li>
                <li>
                  <a className="footer-href-text" href="">
                    Wakil Kepala Dinas
                  </a>
                </li>
              </ul>
            </Col>

            <Col xs={4} className="footer-contain">
              <h3 className="footer-contain-text">LOKASI</h3>

              <iframe
                className="maps"
                src={DataFooter.google_map}
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </Col>
          </Row>
        </Col>
        <Col className={DataFooter.google_map} xs={12}>
          <Row>
            <Col xs={12} className="footer-contain text-cc">
              2022 Copyright {DataFooter.nama_instansi}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
