/*
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);
*/

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
        imagePath: DataTypes.STRING,
        title: DataTypes.STRING,
        descripcion: DataTypes.TEXT,
        price: DataTypes.FLOAT
    });


};