import { Meteor } from 'meteor/meteor';
import { Item } from '../../api/item/Item';

const removeItemMethod = 'Item.remove';

Meteor.methods({
  'Item.remove'({ name, category, condition, image, price, description, reported }) {
    Item.collection.remove({ name, category, condition, image, price, description, reported });
  },
});

export { removeItemMethod };
