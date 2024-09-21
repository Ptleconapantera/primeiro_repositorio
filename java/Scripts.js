function segunda_func(){
    alert('Segunda Função!')
}
function terceira_func(){
    alert('Terceira Função!')
}
let btnTerc = document.getElementById('btnTerc')
btnTerc.onclick = terceira_func

function mostrarmensagem(){
let mensagem = document.getElementById('txtmensagem').value
alert(mensagem)
}
let btnmensagem = document.getElementById('btnmensagem')
btnmensagem.onclick = mostrarmensagem