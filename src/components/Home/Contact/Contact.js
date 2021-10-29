import React from "react";
import { Container, CardGroup, Card } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container className="mt-5">
      <div className="my-5 text-uppercase text-color">
        <p>Why Contact Us?</p>
        <h1 className="display-3">We are best in our field</h1>
        <p className="text-muted mt-2">
          You can rest assured we’ll have the capacity to make you feel
          comfortable as we leave <br /> the techy stuff and we focus on helping
          people.
        </p>
      </div>
      <CardGroup>
        <Card className="border-0">
          <Card.Img
            className="p-5"
            variant="top"
            src="https://image.flaticon.com/icons/png/512/1245/1245075.png"
          />
          <Card.Body>
            <Card.Title className="text-color card-heading">
              We Work Around the World
            </Card.Title>
            <Card.Text>You can go anywhere around the world.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img
            className="p-5"
            variant="top"
            src="https://image.flaticon.com/icons/png/512/1245/1245101.png"
          />
          <Card.Body>
            <Card.Title className="text-color card-heading">
              We Move Fast and Safe
            </Card.Title>
            <Card.Text>Journey will be comfortable. </Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img
            className="p-5"
            variant="top"
            src="https://image.flaticon.com/icons/png/512/1203/1203407.png"
          />
          <Card.Body>
            <Card.Title className="text-color card-heading">
              We Do Everything Legally
            </Card.Title>
            <Card.Text>Every action is handled legally.</Card.Text>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img
            className="p-5 border-right"
            variant="top"
            src="https://image.flaticon.com/icons/png/512/1010/1010285.png"
          />
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
