/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Item = ({ item }) => (
  <Col>
    <Card className="h-100">
      <Card.Header>
        <Image src={item.image} width={50} />
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle>{item.price}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {item.description}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};
export default Item;
