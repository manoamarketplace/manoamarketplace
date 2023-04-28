import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { _ } from 'meteor/underscore';
import { Item } from '../../api/item/Item';
import LoadingSpinner from '../components/LoadingSpinner';
import MakeOffer from '../components/MakeOffer';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const MoreInfo = () => {
  const { _id } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, item } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Item documents.
    const subscription = Meteor.subscribe(Item.buyerPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Item document
    const itemItems = Item.collection.find({ _id: _id }).fetch();
    const thisItem = itemItems[0];
    // Get the Seller
    return {
      item: thisItem,
      ready: rdy,
    };
  }, [_id]);

  // eslint-disable-next-line no-nested-ternary
  return (ready ? (
    (!_.isEmpty(item) ? (
      <Container className="py-3">
        <Row>
          <Col className="justify-content-start" xs={6}>
            <Image src={item.image} alt={item.name} width="600px" />
          </Col>
          <Col xs={6}>
            <h1>{item.name}</h1>
            <h4>${item.price}</h4>
            <br />
            <p>Condition: {item.condition}</p>
            <p>{item.description}</p>
            <MakeOffer owner={item.owner} itemId={item._id} />
          </Col>
        </Row>
      </Container>
    ) : <Row className="justify-content-center text-center"><h4>No items match this category!</h4></Row>)
  ) : <LoadingSpinner />);
};

export default MoreInfo;