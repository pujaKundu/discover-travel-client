import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const dollar = <FontAwesomeIcon icon={faDollarSign} />;
const ServiceDetail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const { name, description, url, price, duration, maxPeople, minAge, type } =
    detail;
  //console.log(id);
  useEffect(() => {
    fetch(`https://limitless-inlet-52700.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);
  return (
    <div style={{ backgroundColor: "#d4d3cf" }}>
      <Container style={{ backgroundColor: "#d4d3cf" }}>
        <Row
          md={2}
          xs={1}
          className="d-flex align-items-center justify-content-center py-5"
        >
          {" "}
          <Col className="ps-5">
            <div style={{ textAlign: "left" }}>
              <h1
                className="display-4"
                style={{
                  color: "#344e41",

                  textAlign: "left",
                }}
              >
                {name}
              </h1>
              <img src={url} alt="" />
              <p className="mt-4">{description}</p>
            </div>
          </Col>
          <Col>
            <div
              className="p-5 rounded"
              style={{
                backgroundColor: "#344e41",
                color: "#d4d3cf",
              }}
            >
              {" "}
              <h2 className="mb-3">Tour Overview</h2>
              <div className="d-flex flex-column">
                <div className="d-flex ms-5 me-5">
                  <p className="me-5">
                    <span
                      className="me-2 border-right"
                      style={{
                        color: "rgb(190, 241, 112)",
                        fontWeight: "bold",
                      }}
                    >
                      Price:
                    </span>
                    {dollar} {price}
                  </p>
                  <p>
                    <span
                      className="me-2"
                      style={{
                        color: "rgb(190, 241, 112)",
                        fontWeight: "bold",
                      }}
                    >
                      Duration:
                    </span>
                    {duration} Days
                  </p>
                </div>
                <div className="d-flex ms-5">
                  <p className="me-4">
                    <span
                      className="me-2"
                      style={{
                        color: "rgb(190, 241, 112)",
                        fontWeight: "bold",
                      }}
                    >
                      Max People:
                    </span>
                    {maxPeople}{" "}
                  </p>
                  <p>
                    <span
                      className="me-2"
                      style={{
                        color: "rgb(190, 241, 112)",
                        fontWeight: "bold",
                      }}
                    >
                      Min Age:
                    </span>
                    {minAge}
                  </p>
                </div>
              </div>
              <p className="ms-5" style={{ textAlign: "left" }}>
                <span
                  className="me-2"
                  style={{
                    color: "rgb(190, 241, 112)",
                    fontWeight: "bold",
                  }}
                >
                  Tour Type:
                </span>
                {type}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetail;
