import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField, SelectField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Navigate } from 'react-router-dom';
import { Sellers } from '../../api/item/Seller';

const formSchema = new SimpleSchema({
  email: String,
  firstName: String,
  lastName: String,
  picture: String,
  bio: String,
  phone: String,
  year: {
    type: String,
    allowedValues: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Undergraduate', 'Graduate', 'Prefer Not To Say'],
    defaultValue: 'Prefer Not To Say',
  },
  major: {
    type: String,
    allowedValues: ['Undeclared', 'Psychology', 'Biology', 'Nursing', 'Finance', 'Kinesiology', 'Art', 'Music', 'Computer Science', 'Economics', 'Civil Engineering',
      'Political Science', 'Accounting', 'Public Health', 'Language', 'Social Work', 'History', 'Biochemistry', 'Mathematics', 'Education', 'Anthropology',
      'Geography', 'Chemistry', 'Dental hygiene', 'Animal Sciences', 'Journalism', 'Music', 'Astronomy', 'Dance',
      'Astrophysics', 'Physics', 'Health and P.E./Fitness', 'Other', 'Prefer Not To Say'],
    defaultValue: 'Prefer Not To Say',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

const AddProfile = () => {
  const [redirectToReferer, setRedirectToRef] = useState(false);
  const submit = (data, formRef) => {
    const { email, picture, firstName, lastName, phone, year, major, bio } = data;
    const owner = Meteor.user().username;
    Sellers.collection.insert(
      { email, picture, firstName, lastName, phone, year, major, bio, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Profile added successfully', 'success');
          formRef.reset();
          setRedirectToRef(true);
        }
      },
    );
  };
  if (redirectToReferer) {
    return (<Navigate to="/home" />);
  }
  let fRef = null;
  return (
    <Container className="py-3" id="add-profile">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2 className="title">Create your Profile</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="firstName" label="First Name" id="add-profile-form-firstname" /> </Col>
                  <Col><TextField name="lastName" label="Last Name" id="add-profile-form-lastname" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="email" id="add-profile-form-email" /></Col>
                  <Col><TextField name="phone" id="add-profile-form-phone" /></Col>
                  <Col><TextField name="picture" label="Profile Picture" id="add-profile-form-picture" /></Col>
                </Row>
                <Row>
                  <Col><SelectField id="add-profile-form-year" name="year" /></Col>
                  <Col><SelectField id="add-profile-form-major" name="major" /></Col>
                </Row>
                <Row>
                  <Col><LongTextField name="bio" label="Your Bio" id="add-profile-form-bio" /></Col>
                </Row>
                <SubmitField value="Submit" id="add-profile-form-submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProfile;
