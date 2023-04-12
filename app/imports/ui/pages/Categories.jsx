import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Col, Container, Image, Row, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { _ } from 'meteor/underscore';
import LoadingSpinner from '../components/LoadingSpinner';
import { pageStyle } from './pageStyles';
import { PageIDs } from '../utilities/ids';
import { Item } from '../../api/item/Item';
import { Category } from '../../api/item/Category';

const CategoriesPage = ({ }) => (
  /* <Nav>
    <Nav.Link><Button variant="dark">School Supplies</Button> </Nav.Link>
    <Nav.Link><Button variant="dark">Bathroom</Button> </Nav.Link>
    <Nav.Link><Button variant="dark">Kitchen</Button> </Nav.Link>
    <Nav.Link><Button variant="dark">Gym</Button> </Nav.Link>
    <Nav.Link><Button variant="dark">Transportation</Button> </Nav.Link>
  </Nav> */

  <Row className="h-100">
    <Card.Header>
      <Card.Title className="text-center py-3">Categories</Card.Title>
    </Card.Header>
      <Container className="py-3">
        <Row className="justify-content-md-center">
        <Col>
          <Col className="text-center">
      <Link to={`/additem`}>School Supplies</Link>
          </Col>
        </Col>
          <Col>
            <Col className="text-center">
              <Link to={`/additem`}>Bathroom</Link>
            </Col>
          </Col>
          <Col>
            <Col className="text-center">
              <Link to={`/additem`}>Kitchen{'       '}</Link>
            </Col>
          </Col>
          <Col>
            <Col className="text-center">
              <Link to={`/additem`}>Gym{'       '}</Link>
            </Col>
          </Col>
          <Col>
            <Col className="text-center">
              <Link to={`/additem`}>Transportation{'       '}</Link>
            </Col>
          </Col>
    </Row>
  </Container>
  </Row>
    )

/* function getCategoryData(name) {
  const item = _.pluck(Item.collection.find({ category: name }).fetch(), 'item');
  return _.extend({}, { name });
}

 */

/* Component for layout out an Interest Card. */

/*
const MakeCard = ({ category }) => (
  <Col>
    <Card className="h-100">
      <Card.Body>
        <Card.Title style={{ marginTop: '0px' }}>{category.name}</Card.Title>
        {category.item.map((p, index) => <Image key={index} roundedCircle src={p} width={50} />)}
      </Card.Body>
    </Card>
  </Col>
);

MakeCard.propTypes = {
  category: PropTypes.shape({
    type: String,
    allowedValues: ['school', 'bathroom', 'kitchen', 'gym'],
    defaultValue: '',
}).isRequired,
};

const CategoriesPage = () => {

  const { ready } = useTracker(() => {
    const sub1 = Meteor.subscribe(Item.userPublicationName);
    return {
      ready: sub1.ready(),
    };
  }, []);
  const category = _.pluck(Category.collection.find().fetch(), 'name');
  const categoryData = category.map(category => getCategoryData(category));
  return ready ? (
    <Container id={PageIDs.categoriesPage} style={pageStyle}>
      <Row xs={1} md={2} lg={4} className="g-2">
        {categoryData.map((category, index) => <MakeCard key={index} category={category} />)}
      </Row>
    </Container>
  ) : <LoadingSpinner />;
}; */




export default CategoriesPage;
