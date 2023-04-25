import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The SellersCollection. It encapsulates state and variable values for sellers.
 */
class SellersCollection {
  constructor() {
    // The name of this collection.
    this.name = 'SellersCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      email: String,
      firstName: String,
      lastName: String,
      picture: String,
      bio: String,
    });
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
    this.buyerPublicationName = `${this.name}.publication.buyer`;
  }
}

/**
 * The singleton instance of the SellersCollection.
 * @type {SellersCollection}
 */
export const Sellers = new SellersCollection();
