import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import UserNoImage from "../assets/user_no_image.png";

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Card>
            <Card.Body className="text-center">
              <Card.Img
                variant="top"
                src={UserNoImage}
                className="mx-auto"
                style={{ "max-width": 220 }}
              />
              <Card.Title className="m-3">John Doe</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                johndoe@gmail.com
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8}>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="float-right">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
