/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Container, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Pencil, Trash } from 'react-bootstrap-icons';
import swal from 'sweetalert';
import CardOffer from './CardOffer';
import { Item } from '../../api/item/Item';

const removeItem = (docId) => {
  swal('Item Deleted', 'Item deleted successfully', 'success');
  Item.collection.remove(docId);
};

const UserItemCard = ({ item }) => (
  <Col className="mx-auto">
    <Card className="h-100 mx-auto">
      <Link to={`/more-info-owner/${item._id}`} style={{ color: 'black', textDecoration: 'none' }}>
        <Card.Header>
          <Image src={item.image} className="img" />
          <Card.Title>
            <h2>{item.name}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to={`/edit/${item._id}`} className="px-2" style={{ textDecoration: 'none' }}>
                {' '}<small><small><Pencil id="edit" /></small></small>
              </Link>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link className="link-danger px-1" onClick={() => removeItem(item._id)} style={{ textDecoration: 'none' }}>
                {' '}<small><small><Trash /></small></small>
              </Link>
            </h2>
          </Card.Title>
          <Card.Subtitle>Listed Price: ${item.price}
          </Card.Subtitle>
        </Card.Header>
        <Container>
          <Card.Body className="mx-auto">
            <Card.Text>{item.seller}</Card.Text>
            <Card.Text>Condition: {item.condition}</Card.Text>
            <Card.Text>
              {item.description}
            </Card.Text>
            <h5>Offers</h5>
            <CardOffer itemId={item._id} />
          </Card.Body>
        </Container>
      </Link>
    </Card>
  </Col>
);

UserItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    condition: PropTypes.string,
    seller: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};
export default UserItemCard;
