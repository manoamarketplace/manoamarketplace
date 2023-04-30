/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminItemCard = ({ item }) => (
  <Col>
    <Card className="h-100">
      <Link to={`/more-info-owner/${item._id}`} style={{ color: 'black', textDecoration: 'none' }}>
        <Card.Header>
          <Image src={item.image} width={325} height={186} />
          <Row>
            <Col>
              <Card.Title><h2>{item.name}</h2></Card.Title>
              <Card.Subtitle>${item.price}</Card.Subtitle>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Text>{item.seller}</Card.Text>
          <Card.Text>Condition: {item.condition}</Card.Text>
          <Card.Text>
            {item.description}
          </Card.Text>
          {item.reported ? ([
            <p>Item has been reported!</p>,
          ]) : '' }
          <Card.Title><h4>Offers</h4></Card.Title>
        </Card.Body>
      </Link>
    </Card>
  </Col>
);

AdminItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    condition: PropTypes.string,
    seller: PropTypes.string,
    reported: PropTypes.bool,
    _id: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
};

export default AdminItemCard;
