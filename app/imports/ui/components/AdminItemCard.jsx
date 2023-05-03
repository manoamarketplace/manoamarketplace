/* Component for layout out a item Card. */
import React from 'react';
import { Card, Col, Image, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { Pencil, Trash } from 'react-bootstrap-icons';
import { Item } from '../../api/item/Item';

const removeItem = (docId) => {
  swal('Item Deleted', 'Item deleted successfully', 'success');
  Item.collection.remove(docId);
};

const AdminItemCard = ({ item }) => (
  <Col>
    <Card className="h-100">
      <Link to={`/more-info-owner/${item._id}`} style={{ color: 'black', textDecoration: 'none' }}>
        <Card.Header>
          <Image src={item.image} className="img" />
          <Row>
            <Col>
              <Card.Title>
                <h2>{item.name}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link to={`/edit/${item._id}`} className="px-2" style={{ textDecoration: 'none' }}>
                    {' '}<small><small><Pencil /></small></small>
                  </Link>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link className="link-danger px-1" onClick={() => removeItem(item._id)} style={{ textDecoration: 'none' }}>
                    {' '}<small><small><Trash /></small></small>
                  </Link>
                </h2>
              </Card.Title>
              <Card.Subtitle>${item.price}</Card.Subtitle>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-center">Seller: {item.seller}</Card.Text>
          <div className="text-center">
            {item.reported ? ([
              <p style={{ color: 'red' }}>Item has been reported!</p>,
            ]) : '' }
          </div>
        </Card.Body>
      </Link>
    </Card>
  </Col>
);

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
};

export default AdminItemCard;
