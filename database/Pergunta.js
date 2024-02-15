const { DataTypes } = require('sequelize');
const connection = require("./database");

const Pergunta = connection.define('pergunta',{
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

Pergunta.sync({force: false});

module.exports = Pergunta;