import React from 'react';
import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Item } from '../../api/item/Item';
import { Sellers } from '../../api/item/Seller';
import LoadingSpinner from '../components/LoadingSpinner';
import AdminItemCard from '../components/AdminItemCard';
import AdminSellerCard from '../components/AdminSellerCard';

const AdminReported = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, items, sellers } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Item and Seller documents.
    const subscription1 = Meteor.subscribe(Item.adminPublicationName);
    const subscription2 = Meteor.subscribe(Sellers.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription1.ready() && subscription2.ready();
    // Get the Item and Seller documents
    const itemItems = Item.collection.find({}).fetch();
    const sellerInfo = Sellers.collection.find({}).fetch();
    // filter item/user list by chosen category
    const reportedItems = _.filter(itemItems, function (item) { return item.reported === true; });
    const reportedUsers = _.filter(sellerInfo, function (seller) { return seller.reported === true; });
    return {
      items: reportedItems,
      sellers: reportedUsers,
      ready: rdy,
    };
  });

  // eslint-disable-next-line no-nested-ternary
  return (ready ? (
    <Container className="py-3" id="reported">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2 className="title">Reported Listings/Users</h2>
          </Col>
          <Row>
            <h4 className="text-center py-4">Reported Listings</h4>
            <Row xs={1} md={2} lg={3}>
              {items.map((item) => (<Col key={item._id}><AdminItemCard item={item} collection={Item.collection} /></Col>))}
            </Row>
          </Row>
          <Row>
            <h4 className="text-center py-5">Reported Users</h4>
            <Row xs={1} md={2} lg={3}>
              {sellers.map((seller) => (<Col key={seller._id}><AdminSellerCard seller={seller} collection={Sellers.collection} /></Col>))}
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default AdminReported;
