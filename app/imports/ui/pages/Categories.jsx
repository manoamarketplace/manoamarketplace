import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoriesPage = () => (
  <Row className="bg-categories">
    <Card.Header>
      <Card.Title className="text-center pt-4"><h2 className="title">Categories</h2></Card.Title>
    </Card.Header>
    <Container id="categories">
      <Row className="justify-content-md-center">
        <Row className="justify-content-md-center">
          <Col xs="auto" className="py-3">
            <Col className="text-center">
              <Card id="individual-category">
                <Link to="/list/textbooks" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                  <Image src="/images/books.jpg" width={325} height={186} />
                  <h2>Textbooks</h2>
                </Link>
              </Card>
            </Col>
          </Col>
          <Col xs="auto" className="py-3">
            <Col className="text-center">
              <Card id="individual-category">
                <Link to="/list/stationary" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                  <Image src="/images/stationary.jpg" width={325} height={186} />
                  <h2>Stationary</h2>
                </Link>
              </Card>
            </Col>
          </Col>
          <Col xs="auto" className="py-3">
            <Col className="text-center">
              <Card id="individual-category">
                <Link to="/list/electronics" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                  <Image src="/images/electronics.jpeg" width={325} height={186} />
                  <h2>Electronics</h2>
                </Link>
              </Card>
            </Col>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="auto" className="py-3">
            <Col className="text-center">
              <Card id="individual-category">
                <Link to="/list/bathroom" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                  <Image src="/images/bath.png" width={325} height={186} />
                  <h2>Bathroom</h2>
                </Link>
              </Card>
            </Col>
          </Col>
          <Col xs="auto" className="py-3">
            <Col className="text-center">
              <Card id="individual-category">
                <Link to="/list/kitchen" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                  <Image src="/images/kitchen.jpg" width={325} height={186} />
                  <h2>Kitchen</h2>
                </Link>
              </Card>
            </Col>
          </Col>
          <Col xs="auto" className="py-3">
            <Col className="text-center">
              <Card id="individual-category">
                <Link to="/list/gym" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                  <Image src="/images/gym.jpg" width={325} height={186} />
                  <h2>Gym</h2>
                </Link>
              </Card>
            </Col>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="auto" className="py-3">
            <Col className="text-center">
              <Card id="individual-category">
                <Link to="/list/transportation" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                  <Image src="/images/transportation.jpg" width={325} height={186} />
                  <h2>Transportation</h2>
                </Link>
              </Card>
            </Col>
          </Col>
          <Col xs="auto" className="py-3">
            <Col className="text-center">
              <Card id="individual-category">
                <Link to="/list/dorm" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                  <Image src="/images/dorm2.png" width={325} height={186} />
                  <h2>Dorm Essentials</h2>
                </Link>
              </Card>
            </Col>
          </Col>
          <Col xs="auto" className="py-3">
            <Col className="text-center">
              <Card id="individual-category">
                <Link to="/list/clothing" style={{ color: 'forestgreen', textDecoration: 'none' }}>
                  <Image src="/images/clothes.jpg" width={325} height={186} />
                  <h2>Clothing</h2>
                </Link>
              </Card>
            </Col>
          </Col>
        </Row>
      </Row>
    </Container>
  </Row>
);

export default CategoriesPage;
