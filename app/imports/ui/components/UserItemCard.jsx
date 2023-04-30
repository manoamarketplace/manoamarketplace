/* Component for layout out a item Card. */
import React from 'react';
<<<<<<< Updated upstream
import { Card, Col, Image } from 'react-bootstrap';
=======
import { Card, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItemCard = ({ item }) => (
  <Col>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
    <Button href={`/more-info/${item._id}`} variant="text" className="p-0">
=======
    <Button href={`/more-info-owner/${item._id}`} variant="text" className="p-0">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
          <Card.Title><h4>Offers</h4></Card.Title>
          <Link to={`/edit/${item._id}`}>Edit Item</Link>
>>>>>>> Stashed changes
        </Card.Body>
        <Card.Footer className="align-content-right">
          <Link to={`/edit/${item._id}`}>Edit</Link>
        </Card.Footer>
      </Card>
    </Button>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
    seller: PropTypes.string,
    _id: PropTypes.string,
>>>>>>> Stashed changes
    owner: PropTypes.string,
  }).isRequired,
};
export default UserItemCard;
