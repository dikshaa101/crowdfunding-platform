import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Signin = () => {
  return (
    <Container className="mt-5">
      <h1>Sign In</h1>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Login</Button>
      </Form>
    </Container>
  );
};

export default Signin;
