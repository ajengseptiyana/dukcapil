import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import "./header.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const Header = () => {
  const [DataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("http://adminmesuji.embuncode.com/api/menus?instansi_id=12 ")
      .then(function (Response) {
        // handle success
        console.log(Response);
        setDataResponse(Response.data);
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
    <Fragment>
      <div className="header">
        <Navbar bg="" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-center"
              id="basic-navbar-nav"
            >
              <Nav className="margin-navbar-text">
                {DataResponse &&
                  DataResponse.map((m, i) => {
                    return (
                      <Fragment key={i}>
                        {m.children.length > 0 ? (
                          <>
                            <NavDropdown title={m.name}>
                              {m.children &&
                                m.children.map((h, k) => {
                                  return (
                                    <Fragment key={k}>
                                      {h.children.length > 0 ? (
                                        <>
                                          <NavDropdown title={h.name}>
                                            {h.children &&
                                              h.children.map((j, o) => {
                                                return (
                                                  <Fragment key={o}>
                                                    {j.children.length > 0 ? (
                                                      <>
                                                        <NavDropdown
                                                          title={j.name}
                                                        >
                                                          {j.children &&
                                                            j.children.map(
                                                              (k, l) => {
                                                                return (
                                                                  <NavDropdown.Item
                                                                    eventKey="4.1"
                                                                    href={k.url}
                                                                    key={l}
                                                                  >
                                                                    {k.name}
                                                                  </NavDropdown.Item>
                                                                );
                                                              }
                                                            )}
                                                        </NavDropdown>
                                                      </>
                                                    ) : j.static_page !=
                                                      null ? (
                                                      <Link
                                                        to={
                                                          "/static/" +
                                                          j.static_page
                                                        }
                                                      >
                                                        {j.name}
                                                      </Link>
                                                    ) : (
                                                      <Nav.Link href={j.url}>
                                                        {j.name}
                                                      </Nav.Link>
                                                    )}
                                                  </Fragment>
                                                );
                                              })}
                                          </NavDropdown>
                                        </>
                                      ) : h.static_page != null ? (
                                        <Link to={"/static/" + h.static_page}>
                                          {h.name}
                                        </Link>
                                      ) : (
                                        <Nav.Link href={h.url}>
                                          {h.name}
                                        </Nav.Link>
                                      )}
                                    </Fragment>
                                  );
                                })}
                            </NavDropdown>
                          </>
                        ) : m.static_page != null ? (
                          <Link to={"/static/" + m.static_page}>{m.name}</Link>
                        ) : (
                          <Nav.Link href={m.url}>{m.name}</Nav.Link>
                        )}
                      </Fragment>
                    );
                  })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <br></br>
    </Fragment>
  );
};

export default Header;
