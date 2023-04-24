import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { _ } from 'meteor/underscore';
import { Item } from '../../api/item/Item';
import LoadingSpinner from '../components/LoadingSpinner';
import ItemCard from '../components/ItemCard';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const YourListings = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, items } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Item documents.
    const subscription = Meteor.subscribe(Item.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Item documents
    const itemItems = Item.collection.find({}).fetch();
    // filter item list by chosen category
    return {
      items: itemItems,
      ready: rdy,
    };
  });

  // eslint-disable-next-line no-nested-ternary
  return (ready ? (
    (!_.isEmpty(items) ? (
      <Container id="yourlistings" className="py-3">
        <Row className="justify-content-center">
          <Col>
            <Col className="text-center">
              <h2>Your Listings</h2>
            </Col>
            <Row xs={1} md={2} lg={3} className="g-4">
              {items.map((item) => (<Col key={item._id}><ItemCard item={item} /></Col>))}
            </Row>
          </Col>
        </Row>
      </Container>
    ) : <Row className="justify-content-center text-center"><h4>You currently have no listings</h4></Row>)
  ) : <LoadingSpinner />);
};

export default YourListings;
