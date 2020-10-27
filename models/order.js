const sequelizeImport = require('sequelize');
const SequelizeConn = require('../util/database')

const Order = SequelizeConn.define('order', {
    payment_id: sequelizeImport.STRING,
    payment_total: sequelizeImport.FLOAT
});

module.exports = Order;