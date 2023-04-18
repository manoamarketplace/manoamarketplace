import React from 'react';
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

  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
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
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

// Require a document to be passed to this component.
MakeOffer.propTypes = {
  _id: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default MakeOffer;
