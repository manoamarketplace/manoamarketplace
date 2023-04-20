import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const ListOffers = ({ offer }) => (
  <ListGroup.Item>
    <p className="fw-lighter">{offer.createdAt.toLocaleDateString('en-US')}</p>
    <p className="fw-lighter">By: {offer.sellerId}</p>
    <p>{offer.offer}</p>
  </ListGroup.Item>
);

// Require a document to be passed to this component.
ListOffers.propTypes = {
  offer: PropTypes.shape({
    offer: PropTypes.number,
    sellerId: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    _id: PropTypes.string,
  }).isRequired,
};

export default ListOffers;
