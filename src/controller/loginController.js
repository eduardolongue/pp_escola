const connection= require('../config/db')

async function login(request, response) { 
    const email = Array(request.body.email);

    const query = "SELECT email, password FROM users WHERE email = ?";
    //confirma se o email existe no banco
    connection.query(query, email, (err, results) => {
        console.log(err, results)
        if(results.length > 0) {
            //recuperou o que recebeu de informação no imput
            const password = request.body.password;
            //acessio o valor do banco da password
            const passwordQuery = results[0].password;

            if(password === passwordQuery) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: "Senha correta",
                        data: results
                    })
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: "Senha incorreta"
                    })
            }
        } else {
            response 
                .status(400)
                .json({
                    success: false,
                    message: "Sem sucesso",
                    data: err
                })
        }
    })
}

module.exports = {
    login
};