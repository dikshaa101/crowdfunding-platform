import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <Container className="text-center mt-5">
      <Helmet>
        <title>Crowdfunding Platform - Home</title>
        <meta name="description" content="Support innovative projects and bring ideas to life through crowdfunding." />
      </Helmet>
      <h1>Empower Ideas, Fund Dreams</h1>
      <p>Join the community and help turn great ideas into reality.</p>
      <Link to="/campaigns">
        <Button variant="primary">Explore Campaigns</Button>
      </Link>
    </Container>
  );
};

export default Home;
