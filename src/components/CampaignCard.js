import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const CampaignCard = ({ campaign }) => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <Card className="mb-4 shadow-sm" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={campaign.image || "/default-campaign.jpg"} />
      <Card.Body>
        <Card.Title>{campaign.title}</Card.Title>
        <Card.Text>{campaign.description}</Card.Text>
        <p><strong>Goal:</strong> ${campaign.goal}</p>
        <p><strong>Raised:</strong> ${campaign.raisedAmount}</p>
        <Button variant="primary" onClick={() => navigate("/payment")}>
          Donate Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CampaignCard;
