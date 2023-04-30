import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams } from 'react-router';
import { _ } from 'meteor/underscore';
import swal from 'sweetalert';
import { Trash } from 'react-bootstrap-icons';
import { Item } from '../../api/item/Item';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const MoreInfoOwner = () => {
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
    return {
      item: thisItem,
      ready: rdy,
    };
  }, [_id]);
  const reportItem = () => {
    item.reported = true;
    Item.collection.update(_id, item, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };
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
            <Image src={item.image} alt={item.name} width="90%" />
          </Col>
          <Col xs={6}>
            <h1>{item.name}</h1>
            <h4>${item.price}</h4>
            <br />
            <p>Condition: {item.condition}</p>
            <p>{item.description}</p>
          </Col>
        </Row>
        <Row className="py-4">
          <Col xs="1">
            <Button variant="text" style={{ color: 'blue' }} onClick={reportItem}>Report</Button>
          </Col>
          <Col xs="1">
            <Button variant="text" style={{ color: 'blue' }} href={`/edit/${item._id}`}>Edit</Button>
          </Col>
          <Col xs="1">
            <Button variant="danger" onClick={() => removeItem(item._id)}><Trash /></Button>
          </Col>
        </Row>
      </Container>
    ) : <Row className="justify-content-center text-center"><h4>This item does not exist or has been taken down.</h4></Row>)
  ) : <LoadingSpinner />);
};

export default MoreInfoOwner;
