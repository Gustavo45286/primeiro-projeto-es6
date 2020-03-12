//declarar variaveis

//var nomeVaiavel;

const nomeVaiavel = 'joao';

const usuario = { nome: 'jesus', idade: 26};

usuario.nome = 'maria';

const meuVetor = [1,2,3,4];
meuVetor[0] = 90;
meuVetor[2] = 93;

console.log(usuario);
console.log(meuVetor);

//variavel do tipo let

let valor = 3;
let nome ='claudia';

console.log(valor,nome);


//escopo A

var exibirMensagem2 = function (){
    //escopo b
    if(true){
        //escopo f
        let escopoFuncao = "teste";
        let escopoBloco = "teste 2";
        console.log(escopoBloco);

    }

    console.log(escopoBloco);
    console.log(escopoFuncao);
}

exibirMensagem2();
//fsdgtrs