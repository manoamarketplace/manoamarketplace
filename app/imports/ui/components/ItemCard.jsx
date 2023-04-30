/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ItemCard = ({ item }) => (
  <Col>
    <Button href={`/more-info/${item._id}`} variant="text" className="p-0">
      <Card className="w-100">
        <Card.Header>
          <Image src={item.image} className="img" />
          <Card.Title><h3>{item.name}</h3></Card.Title>
        </Card.Header>
      </Card>
    </Button>
  </Col>
);

ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
export default ItemCard;
