    let botao = document.querySelector('button');
let section_cards = document.querySelector('.section_cards');

let titulo = '';
let detalhes = '';
let animal = '';
let data_criacao_metas = '';

botao.onclick = async function () {
    const { value: formValues } = await Swal.fire({
        title: 'Preencha os detalhes do card',
        html: `
            <input type="text" id="titulo" class="swal2-input" placeholder="Título do card">
            <input type="text" id="detalhes" class="swal2-input" placeholder="Detalhes do card">
            <input type="date" id="data_criacao_metas" class="swal2-input" placeholder="Data de conclusão">
        `,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('titulo').value,
                document.getElementById('detalhes').value,
                document.getElementById('data_criacao_metas').value
            ]
        }
    });

    if (formValues) {
        [titulo, detalhes, data_criacao_metas] = formValues;

        const bloco_card = document.createElement('section');
        bloco_card.classList.add('bloco_card');

        const h2 = document.createElement('h2');
        h2.textContent = titulo; // Título do Card

        const p_detalhes_card = document.createElement('p');
        p_detalhes_card.textContent = detalhes; // Detalhes do Card

        const bloco_card_rodape = document.createElement('section');
        bloco_card_rodape.classList.add('bloco_card_rodape');

        let dia = data_criacao_metas.slice(8, 10);
        let mes = data_criacao_metas.slice(5, 7);

        const p_data_card = document.createElement('p');
        p_data_card.textContent = `${dia}/${mes}`;

        // Adicionando elementos do card ao bloco_card_rodape
        bloco_card_rodape.appendChild(p_data_card);

        // Adicionando elementos ao bloco_card
        bloco_card.appendChild(h2);
        bloco_card.appendChild(p_detalhes_card);
        bloco_card.appendChild(bloco_card_rodape);

        // Adicionando o bloco_card ao contêiner de cards
        section_cards.appendChild(bloco_card);
    }
        console.log(titulo);
        console.log(detalhes);
        console.log(data_criacao_metas);

        const data = {
            titulo,
            detalhes,
            data_criacao_metas
        };
    
        const response = await fetch('http://localhost:3005/api/user/meta', {
            method: "POST",
            headers: {
                'Content-Type':'application/json' 
            },
            body: JSON.stringify(data)
        })
    
        const result = await response.json();
        console.log(result);
}


document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3005/api/get/conteudo');
    const result = await response.json();

    if (result.success) {
        const conteudoList = document.querySelector('.conteudos_cards');
        result.data.forEach(conteudo => {
            const card = document.createElement('div');
            card.className = 'bloco_card';

            const titulo = document.createElement('h2');
            titulo.className = 'conteudo_titulo';
            titulo.textContent = conteudo.oque;
            titulo.style.cursor = "pointer"
            titulo.addEventListener('click', function(){
                window.location.href = `detalhes.html?id=${conteudo.id}`
            })


            card.appendChild(titulo);

            conteudoList.appendChild(card)

        })
    } else {
        console.log("Eroo", result.sql);
    }
});