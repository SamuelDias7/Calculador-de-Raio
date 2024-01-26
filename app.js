let raio = 0;
let pi = 3.14;
let resultado;

setarTextos('h1', 'Calcular raio');

setarTextos('p', 'Informe o raio: ');


function pegarDados(){
    raio = document.querySelector('input').value;
    console.log(raio);
    //limparCampo();
    desativarElemento('calcular', 'disabled', true);
    ativarElemento('reiniciar', 'disabled', false);
    desativarElemento('input', 'disabled', true);
    setarTextos('p', `O raio de ${raio} é:`);
    calcular(raio);

}

function calcular(raioP){
    let raioQuadrado = 0;

    raioQuadrado = raioP * raioP;

    resultado = pi * raioQuadrado;
    
    console.log(resultado);

    exibirValor(resultado);

}

function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = '';

}

function desativarElemento(id, atributo, estado){
    let elemento = document.getElementById(id).setAttribute(atributo, estado);

}

function ativarElemento(id, atributo, estado){
    let elemento = document.getElementById(id).removeAttribute(atributo, estado);
}

function setarTextos(tag, texto){
    let mensagem = document.querySelector(tag);
    mensagem.innerHTML = texto;

}

function exibirValor(valorP){
    let campo = document.querySelector('input');
    campo.value = valorP;
}

function reiniciar(){
    limparCampo();   
    desativarElemento('reiniciar', 'disabled',false); 
    ativarElemento('calcular', 'disabled', false);
    ativarElemento('input', 'disabled', false);
    setarTextos('p', 'Informe o raio:');

}