import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const ListOffers = ({ offer }) => (
  <ListGroup.Item>
    <p className="fw-lighter">{offer.date.toLocaleDateString('en-US')}</p>
    <p className="fw-lighter">By: {offer.owner}</p>
    <p>{comment.comment}</p>
  </ListGroup.Item>
);

// Require a document to be passed to this component.
ListOffers.propTypes = {
  offer: PropTypes.shape({
    amount: PropTypes.string,
    forumID: PropTypes.string,
    owner: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    _id: PropTypes.string,
  }).isRequired,
};

export default ListComments;