const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','123321',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = connection;