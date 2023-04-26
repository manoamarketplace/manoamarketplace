import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

const Seller = ({ seller }) => (
  <Card className="h-100 mx-auto">
    <Card.Header>
      <div className="d-flex justify-content-center">
        <Image src={seller.picture} className="img" />
      </div>
    </Card.Header>
    <Card.Body>
      <Card.Title className="text-center">{seller.firstName} {seller.lastName}</Card.Title>
      <Card.Subtitle>Email: {seller.email}</Card.Subtitle>
      <Card.Subtitle>Phone: {seller.phone}</Card.Subtitle>
      <Card.Subtitle>Year: {seller.year}</Card.Subtitle>
      <Card.Subtitle>Major: {seller.major}</Card.Subtitle>
      <Card.Subtitle>Bio: {seller.bio}</Card.Subtitle>
    </Card.Body>
  </Card>
);

Seller.propTypes = {
  seller: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    picture: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    owner: PropTypes.string,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Seller;
