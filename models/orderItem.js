const sequelizeImport = require('sequelize');
const SequelizeConn = require('../util/database')

const OrderItem = SequelizeConn.define('orderItem', {
    id: {
        type: sequelizeImport.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
});

module.exports = OrderItem;