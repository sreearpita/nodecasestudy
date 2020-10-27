const sequelizeImport = require('sequelize');
const SequelizeConn = require('../util/database')

const Product = SequelizeConn.define('product', {
    name: sequelizeImport.STRING,
    description: sequelizeImport.STRING,
    price: sequelizeImport.FLOAT,
    currency: sequelizeImport.STRING
});

module.exports = Product;