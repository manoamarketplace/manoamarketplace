import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';
import dateField from 'uniforms-bootstrap5/src/DateField';

/** Renders a single row in the List contact table. See pages/ListContact.jsx. */
const Offer = ({ offer }) => (
  <ListGroupItem>
    <p className="fw-lighter">{offer.createdAt.toLocaleDateString('en-US')}</p>
    <p>{offer.amount}</p>
  </ListGroupItem>
);

// Require a document to be passed to this component.
Offer.propTypes = {
  offer: PropTypes.shape({
    amount: PropTypes.number,
    _id: PropTypes.string,
    owner: PropTypes.string,
    createdAt: dateField,
  }).isRequired,
};

export default Offer;
