/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Container, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Pencil } from 'react-bootstrap-icons';
import CardOffer from './CardOffer';

const UserItemCard = ({ item }) => (
  <Col className="mx-auto">
    <Card className="h-100 mx-auto">
      <Link to={`/more-info-owner/${item._id}`} style={{ color: 'black', textDecoration: 'none' }}>
        <Card.Header>
          <Image src={item.image} className="img" />
          <Card.Title><h2>{item.name}</h2></Card.Title>
          <Card.Subtitle>Listed Price: ${item.price}
            <Link to={`/edit/${item._id}`}>
              {' '}<big><Pencil id="edit" /></big>
            </Link>
          </Card.Subtitle>
        </Card.Header>
        <Container>
          <Card.Body className="mx-auto">
            <h5>Offers</h5>
            <CardOffer itemId={item._id} />
          </Card.Body>
        </Container>
      </Link>
    </Card>
  </Col>
);

UserItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    condition: PropTypes.string,
    seller: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
export default UserItemCard;
