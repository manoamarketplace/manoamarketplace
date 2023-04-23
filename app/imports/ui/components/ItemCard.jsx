/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Offer from './Offer';
import MakeOffer from './MakeOffer';

const ItemCard = ({ item, offers }) => (
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
        <ListGroup variant="flush">
          {offers.map((offer, index) => <Offer key={index} offer={offer} />)}
        </ListGroup>
        <MakeOffer sellerId={item.seller} />
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
  offers: PropTypes.arrayOf(PropTypes.shape({
    offer: PropTypes.number,
    sellerId: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    _id: PropTypes.string,
  })).isRequired,
};
export default ItemCard;
