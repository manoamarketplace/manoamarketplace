import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { Sellers } from '../../api/item/Seller';

const Profile = () => {
  const { ready, seller } = useTracker(() => {
    const subscription1 = Meteor.subscribe(Sellers.userPublicationName);
    const rdy = subscription1.ready();
    const sellerSeller = Sellers.collection.find({}).fetch();
    return {
      seller: sellerSeller,
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
                    <Card.Img src={seller.picture} className="img" />
                  </div>
                </Card.Header>
                <div className="d-flex text-black">
                  <div className="flex-grow-1 ms-3">
                    <div className="text-center">
                      <Card.Title>{seller.firstName} {seller.lastName}</Card.Title>
                      <Card.Subtitle>Email: {seller.email}</Card.Subtitle>
                      <Card.Subtitle>Phone: {seller.phone}</Card.Subtitle>
                      <Card.Subtitle>Year: {seller.year}</Card.Subtitle>
                      <Card.Subtitle>Major: {seller.major}</Card.Subtitle>
                    </div>
                    <Card.Body>{seller.bio}</Card.Body>
                    <Card.Footer>
                      <Link to={`/editProfile/${seller._id}`}>Edit Profile</Link>
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
