/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItemCard = ({ userItem }) => (
  <Col>
    <Card className="h-100">
      <Card.Header>
        <Image src={userItem.image} width={325} height={186} />
        <Card.Title><h2>{userItem.name}</h2></Card.Title>
        <Card.Subtitle>${userItem.price}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>Condition: {userItem.condition}</Card.Text>
        <Card.Text>
          {userItem.description}
        </Card.Text>
        <Card.Title><h4>Offers</h4></Card.Title>
        <Link to={`/edit/${userItem.owner}`}>Edit</Link>
      </Card.Body>
    </Card>
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
    owner: PropTypes.string,
  }).isRequired,
};
export default UserItemCard;
