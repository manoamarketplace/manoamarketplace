import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

/** Renders a single row in the List contact table. See pages/ListContact.jsx. */
const Offer = ({ offer }) => (
<<<<<<< Updated upstream
  <ListGroup.Item>
    <p className="fw-lighter">{offer.createdAt.toLocaleDateString('en-US')}</p>
    <p>{offer.offer}</p>
  </ListGroup.Item>
=======
  <Card className="my-3">
    <Container>
      <p className="fw-lighter">{offer.createdAt.toLocaleDateString('en-US')}</p>
      <p className="fw-lighter">{offer.buyer}</p>
      <p>${offer.offer}</p>
    </Container>
  </Card>
>>>>>>> Stashed changes
);

// Require a document to be passed to this component.
Offer.propTypes = {
  offer: PropTypes.shape({
    offer: PropTypes.number,
    owner: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
<<<<<<< Updated upstream
=======
    itemId: PropTypes.string,
    buyer: PropTypes.string,
>>>>>>> Stashed changes
  }).isRequired,
};

export default Offer;
