/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    first_name: {
      type: 'string',
      required: true
    },
    last_name: {
      type: 'string',
      required: true
    },
    birthdate: {
      type: 'date'
    },
    email: {
      type: 'email',
      required: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6,
      maxLength: 20
    },
    balance: {
      type: 'float',
      defaultsTo: 2000
    },
    shares: {collecction: 'share',
              'via': 'shares'},
  }
};

