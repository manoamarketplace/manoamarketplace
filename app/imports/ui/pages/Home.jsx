import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { _ } from 'meteor/underscore';
import { Item } from '../../api/item/Item';
import ItemCard from '../components/ItemCard';
import offer from '../components/Offer';

/* A simple static component to render some text for the landing page. */
const Landing = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { items } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Item documents.
    const subscription = Meteor.subscribe(Item.buyerPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Item documents
    const itemItems = Item.collection.find({}).fetch();
    // filter item list by chosen category
    const sampleItems = _.sample(itemItems, 3);
    return {
      items: sampleItems,
      ready: rdy,
    };
  });

  return (
    <Container id="landing-page" className="py-3">
      <div className="p-5 rounded-3 home">
        <Container className="py-5">
          <Row>
            <Col>
              <h1 className="display-5 fw-bold">Manoa Marketplace</h1>
              <p className="col-md-8 fs-4">The best place to buy and sell second-hand items at UH Manoa. Connect with other students to get all kinds of school-related supplies right on campus!</p>
            </Col>
            <Col><Image src="/images/shopping-removebg.png" width="500px" className="rounded float-right" /></Col>
          </Row>
        </Container>
      </div>
      <Row className="py-2 home">
        <h1 className="display-5 fw-bold">Top Picks</h1>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4">
        {items.map((item) => (<Col key={item._id}><ItemCard item={item} offers={offer} /></Col>))}
      </Row>
    </Container>

  );
};

export default Landing;
