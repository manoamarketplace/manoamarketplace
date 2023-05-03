import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { _ } from 'meteor/underscore';
import swal from 'sweetalert';
import { Trash, Pencil } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { Item } from '../../api/item/Item';
import LoadingSpinner from '../components/LoadingSpinner';
import { Offers } from '../../api/offer/Offers';
import Offer from '../components/Offer';

const MoreInfoOwner = () => {
  const { _id } = useParams();
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, item, offers } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Item documents.
    const subscription = Meteor.subscribe(Item.userPublicationName) && Meteor.subscribe(Item.adminPublicationName);
    const subscription2 = Meteor.subscribe(Offers.userPublicationName) && Meteor.subscribe(Offers.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready() && subscription2.ready();
    // Get the Item document
    const itemItems = Item.collection.find({ _id: _id }).fetch();
    const thisItem = itemItems[0];
    // Get Offers
    const offerItems = Offers.collection.find({ itemId: _id }).fetch();

    return {
      item: thisItem,
      offers: offerItems,
      ready: rdy,
    };
  }, [_id]);

  const removeItem = (docId) => {
    swal('Item Deleted', 'Item deleted successfully', 'success');
    Item.collection.remove(docId);
  };
  // eslint-disable-next-line no-nested-ternary
  return (ready ? (
    (!_.isEmpty(item) ? (
      <Container className="py-3">
        <Row>
          <Col className="justify-content-start" xs={6}>
            <Image src={item.image} alt={item.name} className="more-info-img" />
          </Col>
          <Col xs={6}>
            <h1>{item.name}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to={`/edit/${item._id}`} style={{ textDecoration: 'none' }}>
                {' '}<small><small><Pencil /></small></small>
              </Link>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link className="link-danger" onClick={() => removeItem(item._id)} style={{ textDecoration: 'none' }}>
                {' '}<small><small><Trash /></small></small>
              </Link>
            </h1>
            <h4>${item.price}</h4>
            <br />
            <p>Condition: {item.condition}</p>
            <p>{item.description}</p>
            <h3>Prospective Buyers</h3>
            { offers.map((offer) => (<Col key={offer._id}><Offer offer={offer} /></Col>)) }
          </Col>
        </Row>
      </Container>
    ) : <Row className="justify-content-center text-center"><h4>This listing does not exist or has been taken down.</h4></Row>)
  ) : <LoadingSpinner />);
};

export default MoreInfoOwner;
