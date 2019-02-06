const Sequelize = require('sequelize');


var products = [
    {     
        imagePath: "images/blue.png",
        title: "Blue",
        description: "It is blue",
        price: 10
    },
    {     
        imagePath: "images/red.png",
        title: "Red",
        description: "It is red",
        price: 20
    },
    {     
        imagePath: "images/yellow.png",
        title: "Yellow",
        description: "It is yellow",
        price: 30
    },
    {
        imagePath: "images/purple.png", 
        title: "Purple",
        description: "It is purple",
        price: 40
    },
    {
        imagePath: "images/orange.png",
        title: "Orange",
        description: "It is orange",
        price: 50
    },
    {
        imagePath: "images/green.png",
        title: "Green",
        description: "It is green",
        price: 60
    },
];

const sequelize = new Sequelize('store', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
  
    pool: {
      max: 10,
      min: 0,
   
    },
  });
  
const Product = sequelize.import('../models/product');

sequelize
    .authenticate()
    .then(() => {
        
    
Product.sync({force:true})
.then(() =>{
    return Product.bulkCreate(products)
});
    });



