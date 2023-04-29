/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import itemCard from './ItemCard';

const AdminItemCard = ({ adminItem }) => (
  <Col>
    <Card className="h-100">
      <Card.Header>
        <Image src={adminItem.image} width={325} height={186} />
        <Card.Title><h2>{adminItem.name}</h2></Card.Title>
        <Card.Subtitle>${adminItem.price}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>{adminItem.seller}</Card.Text>
        <Card.Text>{adminItem.condition}</Card.Text>
        <Card.Text>
          {adminItem.description}
        </Card.Text>
        {adminItem.reported ? ([
          <p>Item has been reported!</p>,
        ]) : ([
        ])}
        <Link to={`/edit/${itemCard._id}`}>Edit</Link>
      </Card.Body>
    </Card>
  </Col>
);

AdminItemCard.propTypes = {
  adminItem: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    condition: PropTypes.string,
    seller: PropTypes.string,
    reported: PropTypes.bool,
  }).isRequired,
};
export default AdminItemCard;
