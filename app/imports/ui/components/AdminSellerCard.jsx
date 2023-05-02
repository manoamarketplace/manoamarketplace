import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'react-bootstrap';

const AdminSellerCard = ({ seller }) => (
  <Card className="h-100 mx-auto">
    <Button href={`/profile/${seller.email}`} variant="text" className="p-0">
      <Card.Header>
        <div className="d-flex justify-content-center">
          <Image src={seller.picture} className="img" />
        </div>
      </Card.Header>
      <div className="text-black">
        <div className="flex-grow-1 ms-3">
          <div className="text-center py-2">
            <Card.Title>{seller.firstName} {seller.lastName}</Card.Title>
            <Card.Subtitle>Email: {seller.email}</Card.Subtitle>
            <Card.Subtitle>Phone: {seller.phone}</Card.Subtitle>
            <Card.Subtitle>Year: {seller.year}</Card.Subtitle>
            <Card.Subtitle>Major: {seller.major}</Card.Subtitle>
          </div>
          <Card.Body>
            <Card.Text>{seller.bio}</Card.Text>
            {seller.reported ? ([
              <p style={{ color: 'red' }}>User has been reported!</p>,
            ]) : '' }
          </Card.Body>
        </div>
      </div>
    </Button>
  </Card>
);

AdminSellerCard.propTypes = {
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
    reported: PropTypes.bool,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default AdminSellerCard;
