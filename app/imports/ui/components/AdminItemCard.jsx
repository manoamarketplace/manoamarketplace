/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ItemCard = ({ item }) => (
  <Col>
    <Card className="h-100">
<<<<<<< Updated upstream
      <Card.Header>
        <Image src={item.image} width={325} height={186} />
        <Card.Title><h2>{item.name}</h2></Card.Title>
        <Card.Subtitle>${item.price}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>{item.seller}</Card.Text>
        <Card.Text>{item.condition}</Card.Text>
        <Card.Text>
          {item.description}
        </Card.Text>
        {item.reported ? ([
          <p>Item has been reported!</p>,
        ]) : ([
        ])}
      </Card.Body>
=======
      <Link to={`/more-info-owner/${item._id}`} style={{ color: 'black', textDecoration: 'none' }}>
        <Card.Header>
          <Image src={item.image} className="img" />
          <Row>
            <Col>
              <Card.Title><h2>{item.name}</h2></Card.Title>
              <Card.Subtitle>${item.price}</Card.Subtitle>
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
          ]) : '' }
          <Card.Title><h4>Offers</h4></Card.Title>
        </Card.Body>
      </Link>
      <Link to={`/edit/${item._id}`}>Edit Item</Link>
>>>>>>> Stashed changes
    </Card>
  </Col>
);

ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    condition: PropTypes.string,
    seller: PropTypes.string,
    reported: PropTypes.bool,
  }).isRequired,
};
export default ItemCard;
