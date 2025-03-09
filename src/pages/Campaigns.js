import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import CampaignCard from "../components/CampaignCard";

const Campaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/campaigns");
        setCampaigns(response.data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Active Campaigns</h2>
      <Row>
        {campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <Col key={campaign._id} md={4}>
              <CampaignCard campaign={campaign} />
            </Col>
          ))
        ) : (
          <p className="text-center">No campaigns available.</p>
        )}
      </Row>
    </Container>
  );
};

export default Campaign;
