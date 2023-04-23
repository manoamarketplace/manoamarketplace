/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import MakeOffer from './MakeOffer';

const ItemCard = ({ item }) => (
  <Col>
    <Card className="h-100">
      <Card.Header>
        <Image src={item.image} className="img" />
        <Card.Title><h2>{item.name}</h2></Card.Title>
        <Card.Subtitle>${item.price}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>{item.seller}</Card.Text>
        <Card.Text>Condition: {item.condition}</Card.Text>
        <Card.Text>
          {item.description}
        </Card.Text>
        <MakeOffer owner={item.seller} />
      </Card.Body>
    </Card>
  </Col>
);

ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    seller: PropTypes.string,
    condition: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
export default ItemCard;
