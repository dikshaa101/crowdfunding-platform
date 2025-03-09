import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const navigate = useNavigate();

  // Campaigns data
  const campaigns = [
    {
      id: 1,
      title: "Clean Water for All",
      description: "Providing clean drinking water to remote villages.",
      image: "/water-campaign.jpg", // Image directly in public folder
    },
    {
      id: 2,
      title: "Save the Rainforest",
      description: "Plant trees and restore the Amazon rainforest.",
      image: "/rainforest.jpg",
    },
    {
      id: 3,
      title: "Education for Every Child",
      description: "Helping underprivileged children get access to education.",
      image: "/education-campaign.jpg",
    },
    {
      id: 4,
      title: "Protect Wildlife",
      description: "Support wildlife conservation and protect endangered species.",
      image: "/wildlife.jpg",
    },
    {
      id: 5,
      title: "Medical Aid for All",
      description: "Providing healthcare facilities to those in need.",
      image: "/medical-aid.jpg",
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4">Discover New Campaigns</h2>
      <Row className="g-4">
        {campaigns.map((campaign) => (
          <Col key={campaign.id} md={6} lg={4}>
            <Card className="shadow-lg border-0 h-100">
              <Card.Img variant="top" src={campaign.image} alt={campaign.title} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">{campaign.title}</Card.Title>
                <Card.Text className="flex-grow-1">{campaign.description}</Card.Text>
                <Button variant="primary" onClick={() => navigate("/campaigns")}>
                  View Campaign
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Discover;
