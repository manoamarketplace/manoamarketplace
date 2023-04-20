import React from 'react';
<<<<<<< Updated upstream
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import PropTypes from 'prop-types';
import { Offers } from '../../api/offer/Offers';

const formSchema = Offers.schema;

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders a single row in the List contact table. See pages/ListContact.jsx. */
const MakeOffer = ({ _id, owner }) => {
  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { amount, createdAt } = data;
    Offers.collection.insert(
      { amount, _id, createdAt, owner },
=======
import PropTypes from 'prop-types';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, HiddenField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Offers } from '../../api/offer/Offers';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  offer: String,
  createdAt: Date,
  seller: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const MakeOffer = ({ seller }) => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { offer, createdAt } = data;
    Offers.collection.insert(
      { offer, seller, createdAt },
>>>>>>> Stashed changes
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

<<<<<<< Updated upstream
=======
  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
>>>>>>> Stashed changes
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
<<<<<<< Updated upstream
          <Col className="text-center" />
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="offer" />
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="owner" value={owner} />
                <HiddenField name="_id" value={_id} />
                <HiddenField name="date" value={new Date()} />
=======
          <Col className="text-center"><h2>Make Offer</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <LongTextField name="offer" />
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="seller" value={seller} />
                <HiddenField name="createdAt" value={new Date()} />
>>>>>>> Stashed changes
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

<<<<<<< Updated upstream
// Require a document to be passed to this component.
MakeOffer.propTypes = {
  _id: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
=======
MakeOffer.propTypes = {
  seller: PropTypes.string.isRequired,
>>>>>>> Stashed changes
};

export default MakeOffer;
