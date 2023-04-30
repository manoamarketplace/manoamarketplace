/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UserItemCard = ({ userItem }) => (
  <Col>
    <Button href={`/more-info/${userItem._id}`} variant="text" className="p-0">
    <Card className="h-100">
      <Card.Header>
        <Image src={userItem.image} className="img" />
        <Card.Title><h2>{userItem.name}</h2></Card.Title>
        <Card.Subtitle>${userItem.price}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>{userItem.seller}</Card.Text>
        <Card.Text>Condition: {userItem.condition}</Card.Text>
        <Card.Text>
          {userItem.description}
        </Card.Text>
        <Card.Title><h4>Offers</h4></Card.Title>
      </Card.Body>
    </Card>
    </Button>
  </Col>
);

UserItemCard.propTypes = {
  userItem: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    condition: PropTypes.string,
    seller: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
  collection: PropTypes.object.isRequired,
};
export default UserItemCard;
