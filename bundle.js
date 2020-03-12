"use strict";

//declarar variaveis
//var nomeVaiavel;
var nomeVaiavel = 'joao';
var usuario = {
  nome: 'jesus',
  idade: 26
};
usuario.nome = 'maria';
var meuVetor = [1, 2, 3, 4];
meuVetor[0] = 90;
meuVetor[2] = 93;
console.log(usuario);
console.log(meuVetor); //variavel do tipo let

var valor = 3;
var nome = 'claudia';
console.log(valor, nome); //escopo A

var exibirMensagem2 = function exibirMensagem2() {
  //escopo b
  if (true) {
    //escopo f
    var escopoFuncao = "teste";
    var escopoBloco = "teste 2";
    console.log(escopoBloco);
  } //console.log(escopoBloco);
  //console.log(escopoFuncao);

};

exibirMensagem2(); //fsdgtrs

var array = [1, 3, 4, 5, 8, 9];
console.log(array); //percorre o vetor e executa determinada função para ele

var novoArray = array.map(function (item, index) {
  return item * 2;
});
console.log(novoArray); //reduce: consumir todo o vetor e trasnformar uma unica informação

var soma = array.reduce(function (total, proximoValor) {
  return total + proximoValor;
});
console.log(soma); //filter: filtrar somente os pares

var filterPares = array.filter(function (item) {
  return item % 2 === 0;
});
console.log(filterPares);
var usuarios = [{
  nome: 'usuario1',
  idade: 10
}, {
  nome: 'usuario2',
  idade: 15
}, {
  nome: 'usuario3',
  idade: 20
}];
var novosUsuarios = usuarios.filter(function (usuario) {
  return usuario.idade >= 15;
});
console.log(novosUsuarios);
