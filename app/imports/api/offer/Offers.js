import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import dateField from 'uniforms-bootstrap5/src/DateField';

/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
 */
class OffersCollection {
  constructor() {
    // The name of this collection.
    this.name = 'OffersCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      amount: Number,
      _id: String,
      owner: String,
      createdAt: dateField,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the StuffsCollection.
 * @type {StuffsCollection}
 */
export const Offers = new OffersCollection();
