import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import { Flag } from 'react-bootstrap-icons';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { _ } from 'meteor/underscore';
import swal from 'sweetalert';
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
  const reportItem = () => {
    Item.collection.update(_id, { $set: { reported: true } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item reported!', 'success')));
  };
  // eslint-disable-next-line no-nested-ternary
  return (ready ? (
    (!_.isEmpty(item) ? (
      <Container className="py-3" id="moreinfo">
        <Row>
          <Col className="justify-content-start" xs={6}>
            <Image src={item.image} alt={item.name} className="more-info-img" />
            <div className="py-5 justify-content-md-center">
              <Button variant="warning" onClick={reportItem}>Report <Flag />
              </Button>
            </div>
          </Col>
          <Col>
            <h1>{item.name}</h1>
            <h4>${item.price}
              <Button variant="outline-warning" size="sm" onClick={reportItem}>Report <Flag />
              </Button>
            </h4>
            <br />
            <p>Condition: {item.condition}</p>
            <p>{item.description}</p>
            <div className="justify-content-center">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <MakeOffer owner={item.owner} itemId={item._id} />
            </div>
            <br />
          </Col>
        </Row>
      </Container>
    ) : <Row className="justify-content-center text-center"><h4>This item does not exist or has been taken down.</h4></Row>)
  ) : <LoadingSpinner />);
};

export default MoreInfo;
