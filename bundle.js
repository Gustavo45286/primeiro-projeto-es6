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
    var _escopoFuncao = "teste";
    var _escopoBloco = "teste 2";
    console.log(_escopoBloco);
  }

  console.log(escopoBloco);
  console.log(escopoFuncao);
};

exibirMensagem2(); //fsdgtrs
