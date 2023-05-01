import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-dark">
    <Container className="w-50">
      <Row>
        <Col className="text-center">
          Manoa Marketplace
          {' '}
          <br />
          University of Hawaii
          <br />
          Honolulu, HI 96822
          {' '}
          <br />
          <a href="http://manoamarketplace.github.io">
            Home Page
          </a>
        </Col>
        <Col className="text-center">
          Questions or Concerns?
          {' '}
          <br />
          Contact Us!
          <br />
          admin@hawaii.edu
          {' '}
          <br />
          808-123-7789
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
