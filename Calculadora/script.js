function calcular(operacao) {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    let resultado;

    switch (operacao) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor2 !== 0 ? valor1 / valor2 : 'Erro';
            break;
        default:
            resultado = '';
    }

    document.getElementById('resultado').value = resultado;
}
function limpar() {
    document.getElementById('valor1').value = '';   // Limpa o valor 1
    document.getElementById('valor2').value = '';   // Limpa o valor 2
    document.getElementById('resultado').value = ''; // Limpa o resultado
}