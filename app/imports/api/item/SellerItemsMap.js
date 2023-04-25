import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class SellerItemsMapCollection {
  constructor() {

    this.name = 'SellerItemsMapCollection';

    this.collection = new Mongo.Collection(this.name);

    this.schema = new SimpleSchema({
      seller: String,
      item: String,
    });
    this.collection.attachSchema(this.schema);
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the SellerItemsMapCollection.
 * @type {SellerItemsMapCollection}
 */
export const SellerItemsMap = new SellerItemsMapCollection();
