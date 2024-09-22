async function conteudoSubmit(event) {
    event.preventDefault();

    const oque = document.getElementById("oque").value;
    const como_funciona = document.getElementById("como_funciona").value;
    const exemplo = document.getElementById("exemplo").value;
    const vantagens = document.getElementById("vantagens").value;

    const data = {
        oque,
        como_funciona,
        exemplo,
        vantagens
    };

    const response = await fetch('http://localhost:3005/api/user/conteudo', {
        method: "POST",
        headers: {
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(data)
    })
    
    const result = await response.json();
    console.log(result);
    if (result.success) {
        window.location.href = "./homeColaborador.html"
    } else {
        alert(result.message);
    }
}