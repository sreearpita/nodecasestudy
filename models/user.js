const sequelizeImport = require('sequelize');
const SequelizeConn = require('../util/database')

const User = SequelizeConn.define('user', {
    firstname: {
        type: sequelizeImport.STRING,
        allowNull: false
    },
    lastname: {
        type: sequelizeImport.STRING,
        allowNull: false
    },
    email: {
        type: sequelizeImport.STRING,
        allowNull: false
    },
    password: {
        type: sequelizeImport.STRING,
        allowNull: false
    },
    role: sequelizeImport.BOOLEAN
});

module.exports = User;