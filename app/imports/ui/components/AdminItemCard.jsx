/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ItemCard = ({ item }) => (
  <Col>
    <Card className="h-100">
      <Card.Header>
        <Image src={item.image} width={325} height={186} />
        <Card.Title><h2>{item.name}</h2></Card.Title>
        <Card.Subtitle>${item.price}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>{item.seller}</Card.Text>
        <Card.Text>
          {item.description}
        </Card.Text>
        {item.reported ? ([
          <p>Item has been reported!</p>,
        ]) : ([
        ])}
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
    description: PropTypes.string,
    seller: PropTypes.string,
    reported: PropTypes.bool,
  }).isRequired,
};
export default ItemCard;
