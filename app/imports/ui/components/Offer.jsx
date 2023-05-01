import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';

/** Renders a single row in the List contact table. See pages/ListContact.jsx. */
const Offer = ({ offer }) => (
  <Card className="my-3">
    <Container>
      <p className="fw-lighter">{offer.createdAt.toLocaleDateString('en-US')}</p>
      <p>${offer.offer}</p>
    </Container>
  </Card>
);

// Require a document to be passed to this component.
Offer.propTypes = {
  offer: PropTypes.shape({
    offer: PropTypes.number,
    owner: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    itemId: PropTypes.string,
  }).isRequired,
};

export default Offer;
