import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { useTracker } from 'meteor/react-meteor-data';
import { Item } from '../../api/item/Item';
import { Sellers } from '../../api/item/Seller';
import LoadingSpinner from '../components/LoadingSpinner';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  category: {
    type: String,
    allowedValues: ['textbooks', 'stationary', 'electronics', 'bathroom', 'kitchen', 'gym', 'transportation', 'dorm', 'clothing'],
    defaultValue: 'dorm',
  },
  image: String,
  price: Number,
  condition: {
    type: String,
    allowedValues: ['used', 'slightly used', 'new'],
    defaultValue: 'used',
  },
  description: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddItem page for adding a document. */
const AddItem = () => {
  const { ready, sellers } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Sellers documents.
    const subscription = Meteor.subscribe(Sellers.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Seller documents
    const sellerItems = (Sellers.collection.find({}).fetch())[0];

    return {
      sellers: sellerItems,
      ready: rdy,
    };
  }, []);
  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { name, category, image, price, condition, description } = data;
    const owner = Meteor.user().username;
    const seller = `${sellers.firstName} ${sellers.lastName}`;
    const reported = false;
    Item.collection.insert(
      { name, category, image, price, condition, description, owner, seller, reported },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Listing added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (ready ? (
    <Container className="py-3" id="additem">
      <Row className="justify-content-center">
        <Col xs={9}>
          <Col className="text-center"><h2 className="title">Create a Listing</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField id="add-form-name" name="name" /></Col>
                  <Col><TextField id="add-form-image" name="image" /></Col>
                </Row>
                <Row>
                  <Col><SelectField id="add-form-category" name="category" /></Col>
                  <Col><NumField id="add-form-price" name="price" /></Col>
                  <Col><SelectField id="add-form-condition" name="condition" /></Col>
                </Row>
                <Row>
                  <LongTextField id="add-form-description" name="description" />
                </Row>
                <SubmitField id="add-form-submit" value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default AddItem;
