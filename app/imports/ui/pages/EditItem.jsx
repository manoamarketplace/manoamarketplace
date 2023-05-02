import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, LongTextField, SelectField, SubmitField, TextField, NumField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { Item } from '../../api/item/Item';

const bridge = new SimpleSchema2Bridge(Item.schema);

/* Renders the EditStuff page for editing a single document. */
const EditItem = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { owner } = useParams();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Item.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Item.collection.findOne(owner);
    return {
      doc: document,
      ready: rdy,
    };
  }, [owner]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { name, category, image, price, condition, description } = data;
    Item.collection.update(owner, { $set: { name, category, image, price, condition, description } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Listing updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={9}>
          <Col className="text-center"><h2 className="title">Edit Listing</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="name" /></Col>
                  <Col><TextField name="image" /></Col>
                </Row>
                <Row>
                  <Col><SelectField name="category" /></Col>
                  <Col><NumField name="price" /></Col>
                  <Col><SelectField name="condition" /></Col>
                </Row>
                <Row>
                  <LongTextField name="description" />
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

export default EditItem;
