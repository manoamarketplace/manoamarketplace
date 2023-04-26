import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { Sellers } from '../../api/item/Seller';

const Profile = () => {
  const { ready, seller } = useTracker(() => {
    const subscription = Meteor.subscribe(Sellers.userPublicationName);
    const rdy = subscription.ready();
    const sellerInfo = Sellers.collection.find({}).fetch();
    return {
      seller: sellerInfo,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <div className="vh-100">
      <Container id="profile">
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="5" className="mt-5">
            <Card style={{ borderRadius: '10px' }}>
              <Card className="p-4">
                <Card.Header>
                  <div className="d-flex justify-content-center">
                    <Card.Img src={seller[0].picture} className="img" />
                  </div>
                </Card.Header>
                <div className="d-flex text-black">
                  <div className="flex-grow-1 ms-3">
                    <div className="text-center">
                      <Card.Title>{seller[0].firstName} {seller[0].lastName}</Card.Title>
                      <Card.Subtitle>Email: {seller[0].email}</Card.Subtitle>
                      <Card.Subtitle>Phone: {seller[0].phone}</Card.Subtitle>
                      <Card.Subtitle>Year: {seller[0].year}</Card.Subtitle>
                      <Card.Subtitle>Major: {seller[0].major}</Card.Subtitle>
                    </div>
                    <Card.Body>{seller[0].bio}</Card.Body>
                    <Card.Footer>
                      <Link to={`/edit-profile/${seller[0]._id}`}>Edit Profile</Link>
                    </Card.Footer>
                  </div>
                </div>
              </Card>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  ) : <LoadingSpinner />);
};

export default Profile;
