import React from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import { Journals, Building, Scooter } from 'react-bootstrap-icons';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" className="py-3">
    <div className="p-5 rounded-3 home">
      <div className="py-5">
        <Row>
          <Col>
            <h1 className="display-5 fw-bold">Manoa Marketplace</h1>
            <p className="col-md-8 fs-4">The best place to buy and sell second-hand items at UH Manoa. Connect with other students to get all kinds of school-related supplies right on campus!</p>
          </Col>
          <Col><Image src="/images/shopping-removebg.png" width="500px" className="rounded float-right" /></Col>
        </Row>
        <Row className="justify-content-center py-3" xs={4}>
          <Button variant="success" href="/signin" size="large" className="btn-lg">Start Shopping!</Button>
        </Row>
      </div>
    </div>
    <div className="landing-green-background rounded">
      <Container>
        <Row className="align-middle py-4">
          <Col xs={4} className="px-4">
            <h3><Journals /> School Supplies</h3>
            <h5>Find second-hand textbooks, laptops, and more for great prices to help you succeed in your studies!</h5>
          </Col>
          <Col xs={4} className="px-4">
            <h3><Building /> Dorm Supplies</h3>
            <h5>Buy mini fridges, microwaves, bedding, and other dorm supplies here to make UH Manoa your new home away from home!</h5>
          </Col>
          <Col xs={4} className="px-4">
            <h3><Scooter /> Transportation</h3>
            <h5>Need some wheels to get around campus? Find mopeds, bicycles, scooters, and more to get you where you need to go!</h5>
          </Col>
        </Row>
      </Container>
    </div>
  </Container>
);

export default Landing;
