document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3005/api/get/metas');
    const result = await response.json();

    if (result.success) {
        const metasList = document.querySelector('.secao_metas');
        result.data.forEach(metas => {
            const card = document.createElement('section');
            card.className = 'metas_card';

            const titulo = document.createElement('h2');
            titulo.className = 'metas_titulo';
            titulo.textContent = metas.titulo;


            card.appendChild(titulo);

            metasList.appendChild(card)

        })
    } else {
        console.log("Eroo", result.sql);
    }
});