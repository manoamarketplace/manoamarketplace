import React from 'react';
import { Card, Col, Image, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const POwnerItemCard = ({ item }) => (


  <Col xs="auto">
    <Button href={`/more-info-owner/${item._id}`} variant="text" className="p-0">
      <Card>
        <Card.Header>
          <Image src={item.image} className="profile-card" />
          <Card.Title><h2><small><small><small><small>{item.name}</small></small></small></small></h2></Card.Title>
        </Card.Header>
      </Card>
    </Button>
  </Col>
);

POwnerItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
export default POwnerItemCard;
