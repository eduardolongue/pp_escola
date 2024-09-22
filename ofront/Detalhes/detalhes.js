document.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search)

    const conteudoId = urlParams.get("id")
    
    if(conteudoId) {
        fetch(`http://localhost:3005/api/get/conteudo/detalhes/${conteudoId}`)
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                const detalhesfuncao = document.getElementById("oque_sessao")
                const detalhesoque = document.getElementById("oque_sessao")
                detalhesoque.innerHTML = 
                `
                <h2>O que é</h2>
                <p id="como_funciona">${data.data.oque}</p>

                <section id="funcao_sessao">
                    <h2>Como Funciona</h2>
                <p id="como_funciona">${data.data.como_funciona}</p>
                </section>

                <section id="exemplo_sessao">
                    <h2>Exemplo</h2>
                    <p>${data.data.exemplo}</p>
                 </section>

                <section id="vantagens_sessao">
                    <h2>Vantagens</h2>
                    <p">${data.data.vantagens}</p>
                </section>
            ` 

                detalhesfuncao.inn
            } else {
                const detalhesMain = document.getElementById("detalhes")
                detalhesMain.innerHTML = `Não há restaurante`
            }
        })
    }
})