/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Container, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardOffer from './CardOffer';

const UserItemCard = ({ item }) => (
  <Col className="mx-auto">
    <Card className="h-100 mx-auto">
      <Link to={`/more-info-owner/${item._id}`} style={{ color: 'black', textDecoration: 'none' }}>
        <Card.Header>
          <Image src={item.image} className="img" />
          <Card.Title className="text-center"><h2>{item.name}</h2></Card.Title>
          <Card.Subtitle className="text-center">Listed Price: ${item.price}</Card.Subtitle>
        </Card.Header>
        <Container>
          <Card.Body className="mx-auto">
            <Card.Text>{item.seller}</Card.Text>
            <Card.Text>Condition: {item.condition}</Card.Text>
            <Card.Text>
              {item.description}
            </Card.Text>
            <h5>Offers</h5>
            <CardOffer itemId={item._id} />
          </Card.Body>
        </Container>
        <Card.Footer className="mx-auto text-center">
          <Link to={`/edit/${item._id}`} className="mx-auto">Edit Item</Link>
        </Card.Footer>
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
