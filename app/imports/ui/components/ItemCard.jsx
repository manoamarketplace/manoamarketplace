/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ItemCard = ({ item }) => (
  <Col>
    <Button href={`/more-info/${item._id}`} variant="text" className="p-0">
      <Card className="w-100">
        <Link to={`/more-info/${item._id}`} style={{ color: 'black', textDecoration: 'none' }}>
          <Card.Header>
            <Image src={item.image} width={325} height={186} />
            <Card.Title><h3>{item.name}</h3></Card.Title>
          </Card.Header>
        </Link>
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
