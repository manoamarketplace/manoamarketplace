import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Item table. See pages/ListItem.jsx. */
const UserItem = ({ item }) => (
  <tr>
    <Image src={item.image} width={150} className="img-fluid" />
    <td>{item.name}</td>
    <td>{item.condition}</td>
    <td>{item.category}</td>
    <td>{item.description}</td>
    <td>
      <Link to={`/editItem/${item._id}`}>Edit</Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
UserItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    condition: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default UserItem;
