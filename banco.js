const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conexao realizada com sucesso")
}).catch(function(error){
    console.log("Falha ao conectar" + error)
})

const Agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.INTEGER
    }
})

// Agendamentos.sync({force: true})

Agendamentos.create({
    nome: "Bruno Silveira Dionisio",
    endereco: "Av aguia de haia",
    bairro: "Jd São Nicolau",
    cep: 08260040
})

