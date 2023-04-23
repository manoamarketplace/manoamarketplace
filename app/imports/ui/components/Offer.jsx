import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

/** Renders a single row in the List contact table. See pages/ListContact.jsx. */
const Offer = ({ offer }) => (
  <ListGroup.Item>
    <p className="fw-lighter">{offer.createdAt.toLocaleDateString('en-US')}</p>
    <p>{offer.offer}</p>
  </ListGroup.Item>
);

// Require a document to be passed to this component.
Offer.propTypes = {
  offer: PropTypes.shape({
    offer: PropTypes.number,
    owner: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    _id: PropTypes.string,
  }).isRequired,
};

export default Offer;
