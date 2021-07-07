//Declaração de Variáveis no TypeScript
// declaracao variavel: tipo = valor;

// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 29;
const valorConta: number = 122.40;

// String
const nome: string = "Allysson Fernando";

// Array
const idades: number[] = [23, 29, 35];
const valores: Array<number> = [23, 54, 322];

// Tuple 
let jogadores: [string, string, string];
jogadores = ["Vitor","João","Maria"];

// Enum
enum StatusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
}
enum StatusAprovacao2 {
  Aprovado,
  Pendente,
  Rejeitado
}

const meuStatus: StatusAprovacao = StatusAprovacao.Aprovado;

// Any - Recomendando apenas em situações especiais, pois anula a tipagem do TypeScript
const retornoAPI: any[] = [123,'asdadad',false];
const retornoAPI2: any = {
  // ....
}

// Void
function printarNaTela(msg: string): void {
  console.log(msg);
}

// Null & Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object){
  // ...
}
criar({
  propriedade: 'valor'
});

//criar('ValorQualquer') // Dá Erro pois não é um objeto

// Never
function loopInfinito(): never{
  while(true){ }
}

function erro(mensagem: string): never{
  throw new Error(mensagem);
}

function falha(){
  return erro("Algo Falhou! ");
}

// Union Types
function exibirNota(nota: number | string){
  console.log(`A nota é ${nota}`)
}

exibirNota(10);

// Alias
type Funcionario = {
  nome: string;
  sobrenome: string;
  data_nascimento: Date;

}
type Funcionarios = Funcionario[];

const funcionarios: Funcionarios = [
  {
    nome: "Vitor",
    sobrenome: "Santos",
    data_nascimento: new Date(),
  }
]
function tratarFuncionarios(funcionarios: Funcionario[]){
  for(let funcionario of funcionarios){
    console.log(`Nome do Funcionário ${funcionario.nome}`)
  }
}
tratarFuncionarios(funcionarios)


// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
<number>minhaIdade.toString();
const input = document.getElementById('input') as HTMLInputElement;
const input2 = <HTMLInputElement>document.getElementById('input');
console.log(input.value);
console.log(input2.value);