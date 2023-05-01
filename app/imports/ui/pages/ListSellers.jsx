import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import { Sellers } from '../../api/item/Seller';
import Seller from '../components/Seller';

const SellersPage = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, sellers } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Sellers documents.
    const subscription = Meteor.subscribe(Sellers.buyerPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Seller documents
    const sellerItems = Sellers.collection.find({}).fetch();

    return {
      sellers: sellerItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container className="py-3" id="sellers">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2 style={{ color: 'forestgreen' }}>List of Users</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4 py-2">
            {sellers.map((seller) => (<Col key={seller._id}><Seller seller={seller} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};
export default SellersPage;
