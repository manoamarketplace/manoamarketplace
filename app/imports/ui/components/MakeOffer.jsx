import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, TextField, SubmitField, HiddenField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Offers } from '../../api/offer/Offers';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  email: String,
  itemId: String,
  createdAt: Date,
  owner: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the MakeOffer page for making an offer. */
const MakeOffer = ({ owner, itemId }) => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { email, createdAt } = data;
    Offers.collection.insert(
      { email, owner, createdAt, itemId },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'The seller has been notified!', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Row>
      <Col className="text-start py-3"><h5>Interested? Enter your email address</h5></Col>
      <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
        <Card style={{ marginRight: '100px' }}>
          <Card.Body>
            <TextField style={{ marginRight: '100px' }} name="email" />
            <SubmitField value="Submit" />
            <ErrorsField />
            <HiddenField name="owner" value={owner} />
            <HiddenField name="itemId" value={itemId} />
            <HiddenField name="createdAt" value={new Date()} />
          </Card.Body>
        </Card>
      </AutoForm>
    </Row>
  );
};

MakeOffer.propTypes = {
  itemId: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default MakeOffer;
