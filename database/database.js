const sequelize = require('sequelize')

const conection = new sequelize('guiaperguntas', 'root','91479691', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conection;