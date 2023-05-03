import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Flag, Pencil, Trash } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';
import { _ } from 'meteor/underscore';
import swal from 'sweetalert';
import { Sellers } from '../../api/item/Seller';
import { Item } from '../../api/item/Item';
import LoadingSpinner from '../components/LoadingSpinner';
import PItemCard from '../components/ProfileItemCard';
import POwnerItemCard from '../components/ProfileOwnerItemCard';

const Profile = () => {

  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username
      : '',
  }), []);

  const removeUser = (docId) => {
    swal('User Deleted', 'User deleted successfully', 'success');
    Sellers.collection.remove(docId);
  };

  const _id = useParams();

  const { ready, seller, items } = useTracker(() => {
    const subscription1 = Meteor.subscribe(Sellers.buyerPublicationName);
    const subscription2 = Meteor.subscribe(Item.buyerPublicationName);
    const subscription3 = Meteor.subscribe(Sellers.adminPublicationName);
    const rdy = subscription1.ready() && subscription2.ready() && subscription3.ready();
    const sellerInfo = Sellers.collection.find({ email: _id.id }).fetch();
    const sellerItems = Item.collection.find({ owner: _id.id }).fetch();
    return {
      seller: sellerInfo,
      items: sellerItems,
      ready: rdy,
    };
  }, []);

  const reportUser = () => {
    Sellers.collection.update(seller[0]._id, { $set: { reported: true } }, (error) => (error ? swal('Error', error.message, 'error') :
      swal('Success', 'User reported!', 'success')));
  };
  // eslint-disable-next-line no-nested-ternary
  return (ready ? (
    (!_.isEmpty(seller) ? (
      <Container>
        <Row>
          <div>
            <Container id="profile">
              <Row className="justify-content-center">
                <Col md="9" lg="7" xl="5" className="mt-5">
                  <Card style={{ borderRadius: '10px' }} className="justify-content-left">
                    <Card className="p-4">
                      <Card.Header>
                        <div className="d-flex justify-content-center">
                          <Card.Img src={seller[0].picture} className="img" />
                        </div>
                      </Card.Header>
                      <div className="d-flex text-black">
                        <div className="flex-grow-1 ms-3">
                          <div className="text-center py-2">
                            <Card.Title>{seller[0].firstName} {seller[0].lastName} </Card.Title>
                            <Card.Subtitle>Email: {seller[0].email}</Card.Subtitle>
                            <Card.Subtitle>Phone: {seller[0].phone}</Card.Subtitle>
                            <Card.Subtitle>Year: {seller[0].year}</Card.Subtitle>
                            <Card.Subtitle>Major: {seller[0].major}</Card.Subtitle>
                          </div>
                          <Card.Body className="text-center">{seller[0].bio}</Card.Body>
                          { currentUser === _id.id && (
                            <Card.Footer>
                              <Row>
                                <Col className="text-center">
                                  <Button variant="outline-success" href={`/edit-profile/${seller[0]._id}`} style={{ textDecoration: 'none' }}>Edit<big><Pencil /></big></Button>
                                </Col>
                              </Row>
                            </Card.Footer>
                          )}
                          {Roles.userIsInRole(Meteor.userId(), 'admin') && currentUser !== _id.id ? (
                            <Card.Footer>
                              <Row>
                                <Col className="text-center">
                                  <Button variant="outline-success" href={`/edit-profile/${seller[0]._id}`} style={{ textDecoration: 'none' }}>Edit<big><Pencil /></big></Button>
                                </Col>
                                <Col className="text-center">
                                  <Button variant="outline-danger" onClick={() => removeUser(seller._id)} className="justify-content-center py-2">Delete <Trash /></Button>
                                </Col>
                              </Row>
                            </Card.Footer>
                          ) : ''}
                        </div>
                      </div>
                    </Card>
                  </Card>
                  { currentUser !== Roles.userIsInRole(Meteor.userId(), '') && currentUser !== _id.id ? (
                    <Row className="py-4">
                      <Col>
                        <Button variant="warning" onClick={reportUser}>Report <Flag />
                        </Button>
                      </Col>
                    </Row>
                  ) : ''}
                </Col>
                <Col className="text-end p-4">
                  <h2 style={{ marginRight: '250px' }} className="title">Current Listings</h2>
                  { currentUser === _id.id && (
                    <Row xs={1} md={2} lg={3} className="g-4 py-4">
                      {items.map((item) => (<Col key={items._id}><POwnerItemCard item={item} collection={Item.collection} /></Col>))}
                    </Row>
                  ) }
                  {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                    <Row xs={1} md={2} lg={3} className="g-4 py-4">
                      {items.map((item) => (<Col key={items._id}><POwnerItemCard item={item} collection={Item.collection} /></Col>))}
                    </Row>
                  ) : ''}
                  { currentUser !== _id.id && (
                    <Row xs={1} md={2} lg={3} className="g-4 py-4">
                      {items.map((item) => (<Col key={items._id}><PItemCard item={item} collection={Item.collection} /></Col>))}
                    </Row>
                  ) }
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
      </Container>
    ) : <Row className="justify-content-center text-center"><h4>This user has not set up a Profile page yet!</h4></Row>)
  ) : <LoadingSpinner />);
};

export default Profile;
