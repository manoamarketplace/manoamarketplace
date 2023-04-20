import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Item } from '../../api/item/Item';
import { Sellers } from '../../api/item/Seller';
import { SellerItemsMap } from '../../api/item/SellerItemsMap';
import { Offers } from '../../api/offer/Offers';

// User-level publication.
// If logged in, then publish items owned by this user. Otherwise publish nothing.

Meteor.publish(Item.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Item.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Sellers.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Sellers.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(SellerItemsMap.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return SellerItemsMap.collection.find({ owner: username });
  }
  return this.ready();
});

// Buyer-level publication.
// Allows users to view all published items.
Meteor.publish(Item.buyerPublicationName, function () {
  if (this.userId) {
    return Item.collection.find();
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise publish nothing.
Meteor.publish(Item.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Item.collection.find();
  }
  return this.ready();
});

Meteor.publish(Sellers.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Sellers.collection.find();
  }
  return this.ready();
});

Meteor.publish(SellerItemsMap.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return SellerItemsMap.collection.find();
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});

Meteor.publish(Offers.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Offers.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Offers.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Offers.collection.find();
  }
  return this.ready();
});
