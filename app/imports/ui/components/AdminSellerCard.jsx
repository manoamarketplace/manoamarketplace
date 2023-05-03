import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { Card, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Pencil, Trash } from 'react-bootstrap-icons';
import { Sellers } from '../../api/item/Seller';

const removeUser = (docId) => {
  swal('User Deleted', 'User deleted successfully', 'success');
  Sellers.collection.remove(docId);
};

const AdminSellerCard = ({ seller }) => (
  <Card className="h-100">
    <Button href={`/profile/${seller.email}`} variant="text" className="p-0">
      <Card.Header>
        <div className="d-flex justify-content-center">
          <Image src={seller.picture} className="img" />
        </div>
      </Card.Header>
      <div className="text-black text-center">
        <Card.Title className="text-center">{seller.firstName} {seller.lastName}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link to={`/edit-profile/${seller._id}`} style={{ textDecoration: 'none' }}>
            {' '}<big><Pencil /></big>
          </Link>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className="link-danger px-2" onClick={() => removeUser(seller._id)} style={{ textDecoration: 'none' }}>
            {' '}<big><Trash /></big>
          </Link>
        </Card.Title>
        <Card.Subtitle>Email: {seller.email}</Card.Subtitle>
        <Card.Subtitle>Phone: {seller.phone}</Card.Subtitle>
        <Card.Subtitle>Year: {seller.year}</Card.Subtitle>
        <Card.Subtitle>Major: {seller.major}</Card.Subtitle>
        <Card.Body>
          <Card.Text>{seller.bio}</Card.Text>
          {seller.reported ? ([
            <p style={{ color: 'red' }}>User has been reported!</p>,
          ]) : '' }
        </Card.Body>
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
