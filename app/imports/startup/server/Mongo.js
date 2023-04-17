import { Meteor } from 'meteor/meteor';
import { Item } from '../../api/item/Item.js';
import { Sellers } from '../../api/item/Seller';
import { SellerItemsMap } from '../../api/item/SellerItemsMap';

/* eslint-disable no-console */

// Initialize the database with a default data document
const addItem = (item) => {
  console.log(`  Adding: ${item.name} (${item.owner})`);
  Item.collection.insert(item);
};

const addSeller = (seller) => {
  console.log(`  Adding: ${seller.lastName} (${seller.owner})`);
  Sellers.collection.insert(seller);
};

const addSellerItemsMap = (sellerItemsMap) => {
  console.log(`  Adding: ${sellerItemsMap.lastName} (${sellerItemsMap.owner})`);
  SellerItemsMap.collection.insert(sellerItemsMap);
};

// Initialize the ItemCollection if empty.
if (Item.collection.find().count() === 0) {
  if (Meteor.settings.defaultItems) {
    console.log('Creating default items.');
    Meteor.settings.defaultItems.forEach(data => addItem(data));
  }
}

if (Sellers.collection.find().count() === 0) {
  if (Meteor.settings.defaultSellers) {
    console.log('Creating default sellers.');
    Meteor.settings.defaultSellers.forEach(seller => addSeller(seller));
  }
}

if (SellerItemsMap.collection.find().count() === 0) {
  if (Meteor.settings.defaultSellerItemsMap) {
    console.log('Creating default sellers items.');
    Meteor.settings.defaultSellerItemsMap.forEach(sellerItemsMap => addSellerItemsMap(sellerItemsMap));
  }
}
