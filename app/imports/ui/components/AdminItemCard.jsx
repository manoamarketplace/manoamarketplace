/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image, Button, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Trash } from 'react-bootstrap-icons';

const AdminItemCard = ({ item, collection }) => {
  const removeItem = (docId) => {
    collection.remove(docId);
  };
  return (
    <Col>
      <Card className="h-100">
        <Card.Header>
          <Image src={item.image} width={325} height={186} />
          <Row>
            <Col>
              <Card.Title><h2>{item.name}</h2></Card.Title>
              <Card.Subtitle>${item.price}</Card.Subtitle>
            </Col>
            <Col xs={2} className="text-left py-2">
              <Button variant="danger" onClick={() => removeItem(item._id)}><Trash />
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Text>{item.seller}</Card.Text>
          <Card.Text>Condition: {item.condition}</Card.Text>
          <Card.Text>
            {item.description}
          </Card.Text>
          {item.reported ? ([
            <p>Item has been reported!</p>,
          ]) : ([
          ])}
          <Card.Title><h4>Offers</h4></Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

AdminItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    condition: PropTypes.string,
    seller: PropTypes.string,
    reported: PropTypes.bool,
    _id: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  collection: PropTypes.object.isRequired,
};

export default AdminItemCard;
