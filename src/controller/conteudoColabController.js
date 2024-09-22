const { query } = require('express');
const connetion = require('../config/db');
const dotenv = require('dotenv').config();

async function storeColabConteudo(request, response) {
    const params = Array(
        request.body.oque,
        request.body.como_funciona,
        request.body.exemplo,
        request.body.vantagens
    );

    const query = "INSERT INTO conteudos(oque, como_funciona, exemplo, vantagens) VALUES(?,?,?,?)";

    connetion.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Meta feita",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Meta não feita",
                    data: err
                })
        } 
    })
}

async function getConteudosColab(request, response) {
    const query = "SELECT * FROM conteudos";

    connetion.query(query, (err, results) => {
        if(results) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Eroo!",
                sql: err
            })
        }
    })
}

async function getConteudosColabByID(request, response) {
    const params = Array(request.params.id);

    const query = "SELECT * FROM conteudos WHERE id = ?"

    connetion.query(query, params, (err, results) => {

        if(results.length > 0) {
            response.status(200).json({
                success: true,
                data: results[0],
                message: "Sucesso"
            })
        } else {
            response.status(400).json({
                success: false,
                message: "Eroo!",
                sql: err
            })
        }
    })
}


module.exports = {
    storeColabConteudo,
    getConteudosColab,
    getConteudosColabByID
}