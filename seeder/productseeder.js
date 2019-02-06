var Product = require('../models/product')

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping')

var products = [
    new Product({     
        imagePath: "images/blue.png",
        title: "Blue",
        description: "It is blue",
        price: 10
    }),
    new Product({     
        imagePath: "images/red.png",
        title: "Red",
        description: "It is red",
        price: 20
    }),
    new Product({     
        imagePath: "images/yellow.png",
        title: "Yellow",
        description: "It is yellow",
        price: 30
    }),
    new Product({
        imagePath: "images/purple.png", 
        title: "Purple",
        description: "It is purple",
        price: 40
    }),
    new Product({
        imagePath: "images/orange.png",
        title: "Orange",
        description: "It is orange",
        price: 50
    }),
    new Product({
        imagePath: "images/green.png",
        title: "Green",
        description: "It is green",
        price: 60
    }),
];

var done = 0;
for (var i=0; i<products.length; i++) {
    products[i].save(function (err, result){
        done++; //increment first since products.legnth doesnt start at 0
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}