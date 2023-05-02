import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { useNavigate } from 'react-router-dom'; // Redirect the user to the homepage after successful form submission
import { Sellers } from '../../api/item/Seller';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  email: String,
  firstName: String,
  lastName: String,
  picture: String,
  bio: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddSeller = () => {
  const redirect = useNavigate();

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { email, firstName, lastName, picture, bio } = data;
    const owner = Meteor.user().username;
    Sellers.collection.insert(
      { email, firstName, lastName, picture, bio, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Seller added successfully', 'success');
          formRef.reset();
          redirect('/home');
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2 className="title">Add Seller</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="email" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="firstName" /></Col>
                  <Col><TextField name="lastName" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="picture" /></Col>
                </Row>
                <LongTextField name="bio" />
                <SubmitField />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSeller;
