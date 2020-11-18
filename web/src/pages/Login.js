import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../store/ducks/auth";

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });

  function onChangeForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
    // window.location.pathname = "/shopping-lists";
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center py-5">
        <Col lg={4}>
          <h3 className="mb-3 text-center">Login</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={onChangeForm}
                value={form.email}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChangeForm}
                value={form.password}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="float-right">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
