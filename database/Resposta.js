const Sequelize = require("sequelize");
const conection = require("./database");

const resposta = conection.define('resposta',{
    corpo:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    perguntaId:{
       type: Sequelize.INTEGER,
       allowNull: false 
    }
});

resposta.sync({force:false});

module.exports = resposta;