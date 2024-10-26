function adicionarParagrafos(lado) {
    const quantidade = document.getElementById(lado === 'esquerdo' ? 'numParagrafosEsquerdo' : 'numParagrafosDireito').value;
    const conteudoDiv = document.getElementById('conteudo' + lado.charAt(0).toUpperCase() + lado.slice(1));
    
    conteudoDiv.innerHTML = ''; // Limpa os parágrafos existentes

    for (let i = 0; i < quantidade; i++) {
        const p = document.createElement('p');
        p.textContent = 'Parágrafo ' + (i + 1) + ' na ' + lado + '.';
        conteudoDiv.appendChild(p);
    }
}