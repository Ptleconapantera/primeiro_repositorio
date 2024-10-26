let paragraphCount = 0;

document.getElementById('addButton').addEventListener('click', function() {
    paragraphCount++;
    const paragraphsDiv = document.getElementById('paragraphs');
    const newParagraph = document.createElement('div');
    newParagraph.className = 'paragraph';
    newParagraph.innerHTML = `
        <label>Parágrafo ${paragraphCount}:</label>
        <input type="text" id="input${paragraphCount}" placeholder="Insira o parágrafo aqui" />
    `;
    paragraphsDiv.appendChild(newParagraph);
});

document.getElementById('copyButton').addEventListener('click', function() {
    let storedText = '';
    for (let i = 1; i <= paragraphCount; i++) {
        const input = document.getElementById(`input${i}`);
        if (input) {
            storedText += `Parágrafo ${i}: ${input.value}\n`;
        }
    }
    document.getElementById('storedParagraphs').value = storedText;
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('storedParagraphs').value = '';
    document.getElementById('paragraphs').innerHTML = '';
    paragraphCount = 0;
});
