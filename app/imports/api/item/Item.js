import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The ItemCollection. It encapsulates state and variable values for stuff.
 */
class ItemCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ItemCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      category: {
        type: String,
        allowedValues: ['textbooks', 'stationary', 'electronics', 'bathroom', 'kitchen', 'gym', 'transportation', 'dorm', 'clothing'],
        defaultValue: 'dorm',
      },
      condition: {
        type: String,
        allowedValues: ['used', 'slightly used', 'new'],
        defaultValue: 'used',
      },
      image: String,
      price: Number,
      description: String,
      reported: Boolean,
      // seller, condition, quantity
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the ItemCollection.
 * @type {ItemCollection}
 */
export const Item = new ItemCollection();
