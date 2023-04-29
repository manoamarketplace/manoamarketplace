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
      lastName: {
        type: String,
        required: false,
      },
      picture: String,
      phone: String,
      year: {
        type: String,
        allowedValues: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Undergraduate', 'Graduate', 'Prefer Not To Say'],
        defaultValue: 'Prefer Not To Say',
      },
      major: {
        type: String,
        allowedValues: ['Undeclared', 'Psychology', 'Biology', 'Nursing', 'Finance', 'Kinesiology', 'Art', 'Music', 'Computer Science', 'Economics', 'Civil Engineering',
          'Political Science', 'Accounting', 'Public Health', 'Language', 'Social Work', 'History', 'Biochemistry', 'Mathematics', 'Education', 'Anthropology',
          'Geography', 'Chemistry', 'Dental hygiene', 'Animal Sciences', 'Journalism', 'Music', 'Astronomy', 'Dance',
          'Astrophysics', 'Physics', 'Health and P.E./Fitness', 'Other', 'Prefer Not To Say'],
        defaultValue: 'Prefer Not To Say',
      },
      bio: String,
      owner: String,
      _id: String,
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
