import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Trash } from 'react-bootstrap-icons';
import { Item } from '../../api/item/Item';

const DeleteProject = ({ item }) => (
  <Button
    variant="danger"
    onClick={() => {
      Item.collection.remove({ _id: item._id });
    }}
  ><Trash />
  </Button>
);

DeleteProject.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default DeleteProject;
