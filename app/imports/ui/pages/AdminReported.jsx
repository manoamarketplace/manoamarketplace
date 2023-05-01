import React from 'react';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Item } from '../../api/item/Item';
import LoadingSpinner from '../components/LoadingSpinner';
import AdminItemCard from '../components/AdminItemCard';

const AdminReported = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, items } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Item documents.
    const subscription = Meteor.subscribe(Item.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Item documents
    const itemItems = Item.collection.find({}).fetch();
    // filter item list by chosen category
    // Get the Offer documents
    const reportedItems = _.filter(itemItems, function (item) { return item.reported === true; });
    return {
      items: reportedItems,
      ready: rdy,
    };
  });

  // eslint-disable-next-line no-nested-ternary
  return (ready ? (
    <Container className="py-3" id="reported">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>Reported Items</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4">
            {items.map((item) => (<Col key={item._id}><AdminItemCard item={item} collection={Item.collection} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default AdminReported;
