//se conecta com o banco de dados
const connetion = require('../config/db');

async function storeUser(request, response) {
    const params = Array(
        //chamando o nome, email e senha do banco de dados
        request.body.name,
        request.body.email,
        request.body.password
    );
        //comando no banco
    const query = "INSERT INTO users(name, email, PASSWORD) VALUES(?,?,?)";

    //recebendo a resposta se funfou ou não
    connetion.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso total!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Não foi sucesso total ;-;",
                    data: err
                })
        } 
    })
}

module.exports = {
    storeUser
}