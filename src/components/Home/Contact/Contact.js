import React from "react";
import { Container, CardGroup, Card } from "react-bootstrap";
import "./Contact.css";
import world from "../../../images/icon/airplane.gif";
import passport from "../../../images/icon/passport.gif";
import travel from "../../../images/icon/travel.gif";
import hotel from "../../../images/icon/hotel.gif";

const Contact = () => {
  return (
    <Container className="my-5">
      <div className="my-5 text-uppercase text-color">
        <p>Why Contact Us?</p>
        <h1 className="display-3">We are best in our field</h1>
        <p className="text-muted mt-2">
          <small>
            You can rest assured we’ll have the capacity to make you feel
            comfortable as we leave <br /> the techy stuff and we focus on
            helping people.
          </small>
        </p>
      </div>
      <CardGroup>
        <Card className="border-0 me-2 card">
          <Card.Img className="p-5" variant="top" src={world} />
          <Card.Body>
            <Card.Title className="text-color card-heading">
              We Work Around the World
            </Card.Title>
            <Card.Text>You can go anywhere around the world.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0 me-2 card">
          <Card.Img className="p-5" variant="top" src={passport} />
          <Card.Body>
            <Card.Title className="text-color card-heading">
              We Do Everything Legally
            </Card.Title>
            <Card.Text>Every action is handled legally.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0 me-2 card">
          <Card.Img className="p-5" variant="top" src={travel} />
          <Card.Body>
            <Card.Title className="text-color card-heading">
              We Move Fast and Safe
            </Card.Title>
            <Card.Text>Journey will be comfortable. </Card.Text>
          </Card.Body>
        </Card>

        <Card className="border-0 me-2 card">
          <Card.Img className="p-5 border-right" variant="top" src={hotel} />
          <Card.Body>
            <Card.Title className="text-color card-heading">
              We Offer The Best Residence
            </Card.Title>
            <Card.Text>Stay at best hotels.</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Contact;
