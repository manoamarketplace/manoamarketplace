import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, LongTextField, SubmitField, TextField, SelectField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Sellers } from '../../api/item/Seller';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Sellers.schema);

const EditProfile = () => {
  const { _id } = useParams();
  const { doc, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Sellers.userPublicationName);
    const rdy = subscription.ready();
    const document = Sellers.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  const submit = (data) => {
    const { email, picture, firstName, lastName, phone, year, major, bio } = data;
    Sellers.collection.update(_id, { $set: { email, picture, firstName, lastName, phone, year, major, bio } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Profile updated successfully.', 'success')));
  };

  return ready ? (
    <Container className="py-3" id="add-profile-page">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Edit your Profile</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="firstName" label="First Name" /> </Col>
                  <Col><TextField name="lastName" label="Last Name" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="email" /></Col>
                  <Col><TextField name="phone" /></Col>
                  <Col><TextField name="picture" label="Profile Picture" /></Col>
                </Row>
                <Row>
                <Col><SelectField id="addprofile-form-year" name="year" /></Col>
                <Col><SelectField id="addprofile-form-major" name="major" /></Col>
                </Row>
                <Row>
                  <Col><LongTextField name="bio" label="Your Bio" /></Col>
                </Row>
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="owner" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditProfile;
