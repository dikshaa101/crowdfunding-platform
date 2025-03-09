import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App"; // Import context
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error message
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before submitting

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });

      if (response && response.data) {
        login(response.data.user, response.data.token);
        navigate("/profile");
      } else {
        setError("Unexpected response from server.");
      }
    } catch (err) {
      console.error("Login Failed", err);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <Card.Body>
          <h2 className="text-center mb-4 text-primary fw-bold">Sign In</h2>
          
          {error && <Alert variant="danger" className="text-center">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </Form.Group>

            <Button type="submit" className="w-100 mt-4 btn btn-primary">
              Login
            </Button>
          </Form>

          <p className="text-center mt-3">
            Don't have an account? <a href="/signup" className="text-primary">Sign up</a>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Signin;
