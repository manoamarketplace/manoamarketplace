import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { _ } from 'meteor/underscore';
import { Item } from '../../api/item/Item';
import LoadingSpinner from '../components/LoadingSpinner';
<<<<<<< Updated upstream
import UserItemCard from '../components/UserItemCard';
import { Offers } from '../../api/offer/Offers';
=======
// import UserItemCard from '../components/UserItemCard';
import AdminItemCard from '../components/AdminItemCard';
import UserItemCard from '../components/UserItemCard';
>>>>>>> Stashed changes

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const YourListings = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, items, offers } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Item and Offer documents
    const subscription = Meteor.subscribe(Item.userPublicationName);
    const subscription2 = Meteor.subscribe(Offers.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready() && subscription2.ready();
    // Get the Item documents
    const itemItems = Item.collection.find({}).fetch();
    // Get the Item documents
    const offerItems = Offers.collection.find({}).fetch();
    // filter item list by chosen category
    return {
      offers: offerItems,
      items: itemItems,
      ready: rdy,
    };
  });

  // eslint-disable-next-line no-nested-ternary
  return (ready ? (
    (!_.isEmpty(items) ? (
      <Container className="py-3">
        <Row className="justify-content-center">
          <Col>
            <Col className="text-center">
              <h2>Your Listings</h2>
            </Col>
            <Row xs={1} md={2} lg={3} className="g-4">
<<<<<<< Updated upstream
              {items.map((item) => (<Col key={item._id}><UserItemCard item={item} offers={offers.filter(offer => (offer.owner === item.seller))} /></Col>))}
=======
              {items.map((item) => (<Col key={item._id}><UserItemCard item={item} collection={Item.collection} /></Col>))}
>>>>>>> Stashed changes
            </Row>
          </Col>
        </Row>
      </Container>
    ) : <Row className="justify-content-center text-center"><h4>No items match this category!</h4></Row>)
  ) : <LoadingSpinner />);
};

export default YourListings;
