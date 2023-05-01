import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, HiddenField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Offers } from '../../api/offer/Offers';

// Create a schema to specify the structure of the data to appear in the form.
<<<<<<< Updated upstream
const formSchema = Offers.schema;
=======
const formSchema = new SimpleSchema({
  offer: Number,
  itemId: String,
  createdAt: Date,
  owner: String,
  buyer: String,
});
>>>>>>> Stashed changes

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the MakeOffer page for adding a document. */
const MakeOffer = ({ owner }) => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { offer, createdAt, buyer } = data;
    Offers.collection.insert(
<<<<<<< Updated upstream
      { offer, owner, createdAt },
=======
      { offer, owner, createdAt, itemId, buyer },
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

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Make an Offer: </h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <LongTextField name="offer" />
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="owner" value={owner} />
                <HiddenField name="createdAt" value={new Date()} />
                <HiddenField name="buyer" value={buyer} />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

MakeOffer.propTypes = {
  owner: PropTypes.string.isRequired,
  buyer: PropTypes.string.isRequired,
};

export default MakeOffer;
