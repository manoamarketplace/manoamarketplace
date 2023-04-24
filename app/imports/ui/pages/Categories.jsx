import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoriesPage = () => (
  <Row className="bg-categories">
    <Card.Header>
      <Card.Title className="text-center py-3"><h1 style={{ color: 'white' }}><strong>Categories</strong></h1></Card.Title>
    </Card.Header>
    <Container id="categories">
      <Row className="justify-content-md-center py+5">
        <Col xs="auto" className="py-3">
          <Col className="text-center">
            <Card>
              <Link to="/list/textbooks" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                <Image src="/images/books.jpg" width={300} height={186} />
                <h2>Textbooks</h2>
              </Link>
            </Card>
          </Col>
        </Col>
        <Col xs="auto" className="py-3">
          <Col className="text-center">
            <Card>
              <Link to="/list/stationary" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                <Image src="/images/stationary.jpg" width={300} height={186} />
                <h2>Stationary</h2>
              </Link>
            </Card>
          </Col>
        </Col>
        <Col xs="auto" className="py-3">
          <Col className="text-center">
            <Card>
              <Link to="/list/electronics" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                <Image src="/images/electronics.jpeg" width={300} height={186} />
                <h2>Electronics</h2>
              </Link>
            </Card>
          </Col>
        </Col>
        <Col xs="auto" className="py-3">
          <Col className="text-center">
            <Card>
              <Link to="/list/bathroom" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                <Image src="/images/bath.png" width={300} height={186} />
                <h2>Bathroom</h2>
              </Link>
            </Card>
          </Col>
        </Col>
        <Col xs="auto" className="py-3">
          <Col className="text-center">
            <Card>
              <Link to="/list/kitchen" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                <Image src="/images/kitchen.jpg" width={300} height={186} />
                <h2>Kitchen</h2>
              </Link>
            </Card>
          </Col>
        </Col>
        <Col xs="auto" className="py-3">
          <Col className="text-center">
            <Card>
              <Link to="/list/gym" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                <Image src="/images/gym.jpg" width={300} height={186} />
                <h2>Gym</h2>
              </Link>
            </Card>
          </Col>
        </Col>
        <Col xs="auto" className="py-3">
          <Col className="text-center">
            <Card>
              <Link to="/list/transportation" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                <Image src="/images/transportation.jpg" width={300} height={186} />
                <h2>Transportation</h2>
              </Link>
            </Card>
          </Col>
        </Col>
        <Col xs="auto" className="py-3">
          <Col className="text-center">
            <Card>
              <Link to="/list/dorm" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                <Image src="/images/dorm2.png" width={300} height={186} />
                <h2>Dorm Essentials</h2>
              </Link>
            </Card>
          </Col>
        </Col>
        <Col xs="auto" className="py-3">
          <Col className="text-center">
            <Card>
              <Link to="/list/clothing" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                <Image src="/images/clothes.jpg" width={300} height={186} />
                <h2>Clothing</h2>
              </Link>
            </Card>
          </Col>
        </Col>
      </Row>
    </Container>
  </Row>
);

export default CategoriesPage;
