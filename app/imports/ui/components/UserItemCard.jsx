/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItemCard = ({ item }) => (
  <Col>
    <Button href={`/more-info-owner/${item._id}`} variant="text" className="p-0">
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
        </Card.Body>
        <Card.Footer>
          <Link to={`/edit/${item._id}`}>Edit Item</Link>
        </Card.Footer>
      </Card>
    </Button>
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
