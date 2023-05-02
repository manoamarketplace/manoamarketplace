import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PItemCard = ({ item }) => (
  <Button href={`/more-info/${item._id}`} variant="text" className="p-0 h-100 mx-auto">
    <Card className="h-100 mx-auto">
      <Card.Header className="h-100 mx-auto">
        <Image src={item.image} className="profile-card-img" />
        <Card.Title><h2><small><small><small><small>{item.name}</small></small></small></small></h2></Card.Title>
      </Card.Header>
    </Card>
  </Button>

);

PItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
export default PItemCard;
