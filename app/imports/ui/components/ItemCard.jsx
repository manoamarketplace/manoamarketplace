/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemCard = ({ item }) => (
  <Col className="h-100 mx-auto">
    <Card className="h-100 mx-auto">
      <Link to={`/more-info/${item._id}`} style={{ color: 'black', textDecoration: 'none' }} className="h-100 mx-auto">
        <Card.Header className="h-100 mx-auto">
          <Image src={item.image} className="img" />
          <Card.Title className="text-center py-2"><h3>{item.name}</h3></Card.Title>
          <Container className="float-md-center">
            <Card.Subtitle className="text-center py-1"><h5>${item.price}</h5></Card.Subtitle>
          </Container>
        </Card.Header>
      </Link>
    </Card>
  </Col>
);

ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
export default ItemCard;
