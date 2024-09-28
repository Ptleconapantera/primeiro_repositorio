function somar(a, b){
    return a + b;
}


function executarCodigo(){
    //alert("Apenas um teste...")
    //console.log("Apenas um teste...")

    //var numero = 10;
    let numero = 10;

    console.log(typeof numero);

    numero = "João";

    console.log(typeof numero);

    //console.log("Valor: " + numero);
    var numero2 = 99;
    const a = 30;
    const b = 40;

    //var r = a + b;
    //let r = a + b;
    //const r = a + b;
    const r = somar(a, b);
    //console.log("Resultado: " + r);

    const nota1 = 7;
    const nota2 = 5;

    const notaFinal = (nota1 + nota2) / 2;

    if (notaFinal >= 6){
        console.log("Aprovado!");
    } else {
        console.log("Reprovado!");
    }

}
let btnExecutar = document.getElementById("btnExecutar")
btnExecutar.onclick = executarCodigo

//Vetores
const vet = (7, 3, 4, 9, 11);

const valorpos3 = vet[2];

const letras = ["a", "b", "c", "d"];

for(let i=0, i < letras.length; i++){
    const letras = letras[i];
    //console.log(letras);
}
for(letras of letras){
    console.log(letras);
}