/**
 * Transaction.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    transaction_ref:{type: 'string' },
    transaction_amount:{type:'FLOAT',
                    required:true},
    balance: {type:'FLOAT'},
    volume: {type: 'float'},
    unit_cost: {type: 'float'},
    total_cost: {type: 'float'},
    charges: {type: 'float'},
    new_balance: {type:'FLOAT'},
    customer_ID:{model:'Customer'},
    description:{type:'string'},
    date: {type: 'date'},
    transaction_type:{type:'string',
    enum:['Top_up', 'Buy','Sell']},
    status:{type:'string',
            enum:['Approved','Rejected']},
    direction:{type:'string',
                enum:['IN', 'OUT']}
  },
  toJSON: function() {
      var obj = this.toObject();
      delete obj.auth;
      // delete obj.updatedAt;
      return obj;
    }
};

