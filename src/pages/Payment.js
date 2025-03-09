import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="text-center shadow-lg p-3" style={{ width: "320px" }}>
        <Card.Body>
          <Card.Title className="fw-bold fs-5">Make Your Donation</Card.Title>
          <Card.Text className="text-muted" style={{ fontSize: "14px" }}>
            Scan the QR code below to donate:
          </Card.Text>
          <img
            src="/GPay.jpeg"
            alt="QR Code"
            className="img-fluid rounded shadow-sm mb-2"
            style={{ width: "100%", maxWidth: "250px" }}
          />
          <p className="text-muted mb-2" style={{ fontSize: "13px" }}>
            UPI ID: diksharajpurohit101@okhdfcbank
          </p>
          <Button variant="secondary" size="sm" onClick={() => navigate("/")}>
            Back to Campaigns
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Payment;
