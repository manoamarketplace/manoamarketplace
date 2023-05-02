import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Col, ListGroup } from 'react-bootstrap';
import { Offers } from '../../api/offer/Offers';
import LoadingSpinner from './LoadingSpinner';

/** Renders a single row in the List contact table. See pages/ListContact.jsx. */
const CardOffer = ({ itemId }) => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, offers } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Item documents.
    const subscription = Meteor.subscribe(Offers.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get Offers
    const offerItems = Offers.collection.find({ itemId: itemId }).fetch();

    return {
      offers: offerItems,
      ready: rdy,
    };
  });

  return (ready ? (
    <ListGroup.Item>
      { offers.map((offer) => (
        <Col key={offer._id}>
          <p>${offer.offer}</p>
        </Col>
      )) }
    </ListGroup.Item>
  ) : <LoadingSpinner />);
};

// Require a document to be passed to this component.
CardOffer.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default CardOffer;
