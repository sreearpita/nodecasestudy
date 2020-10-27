const Sequelize = require('sequelize');

const sequelize = new Sequelize('casestudy', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    }
});

module.exports = sequelize;

