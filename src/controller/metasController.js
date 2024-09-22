const { query } = require('express');
const connetion = require('../config/db');
const dotenv = require('dotenv').config();

async function storeMeta(request, response) {
    const params = Array(
        request.body.titulo,
        request.body.detalhes,
        request.body.data_criacao_metas
    );

    const query = "INSERT INTO metas(titulo, detalhes, data_criacao_metas) VALUES(?,?,?)";

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

async function getMetas(request, response) {
    const query = "SELECT * FROM metas";

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



module.exports = {
    storeMeta,
    getMetas
}