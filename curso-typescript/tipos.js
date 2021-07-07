"use strict";
//Declaração de Variáveis no TypeScript
// declaracao variavel: tipo = valor;
// Boolean
var contaPaga = false;
// Number
var idade = 29;
var valorConta = 122.40;
// String
var nome = "Allysson Fernando";
// Array
var idades = [23, 29, 35];
var valores = [23, 54, 322];
// Tuple 
var jogadores;
jogadores = ["Vitor", "João", "Maria"];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var StatusAprovacao2;
(function (StatusAprovacao2) {
    StatusAprovacao2[StatusAprovacao2["Aprovado"] = 0] = "Aprovado";
    StatusAprovacao2[StatusAprovacao2["Pendente"] = 1] = "Pendente";
    StatusAprovacao2[StatusAprovacao2["Rejeitado"] = 2] = "Rejeitado";
})(StatusAprovacao2 || (StatusAprovacao2 = {}));
var meuStatus = StatusAprovacao.Aprovado;
// Any - Recomendando apenas em situações especiais, pois anula a tipagem do TypeScript
var retornoAPI = [123, 'asdadad', false];
var retornoAPI2 = {
// ....
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null & Undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    // ...
}
criar({
    propriedade: 'valor'
});
//criar('ValorQualquer') // Dá Erro pois não é um objeto
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro("Algo Falhou! ");
}
// Union Types
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota(10);
var funcionarios = [
    {
        nome: "Vitor",
        sobrenome: "Santos",
        data_nascimento: new Date(),
    }
];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log("Nome do Funcion\u00E1rio " + funcionario.nome);
    }
}
tratarFuncionarios(funcionarios);
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
minhaIdade.toString();
var input = document.getElementById('input');
var input2 = document.getElementById('input');
console.log(input.value);
console.log(input2.value);
