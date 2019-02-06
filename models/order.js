/*
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cart: {type: Object, required: true},
    address: {type: String, required: true},
    name: {type: String, required: true},
    paymentId: {type: String, required: true}
});

module.exports = mongoose.model('Order', schema);
*/

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Order', {
      address: DataTypes.STRING,
      cart: DataTypes.JSON,
      address: DataTypes.STRING,
      name: DataTypes.STRING,
      paymentId: DataTypes.STRING
    }, {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    });
 
  };