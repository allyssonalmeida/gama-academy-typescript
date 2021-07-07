class Data{
  //public dia: number;
  //mes: number;
  //ano: number;

  constructor(public dia: number, public mes: number, public ano: number = 1970){
    /*this.dia = dia;
    this.mes = mes;
    this.ano = ano;*/
  }
}

let data = new Data(25, 6, 1992);
console.log(`${data.dia}/${data.mes}/${data.ano}`);

const data2 = new Data(1, 1);


class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ){}

  private alterarVelocidade(delta: number){
    const novaVelocidade = this.velocidadeAtual + delta;
    if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima){
      this.velocidadeAtual = novaVelocidade;
    }else{
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima: 0;
    }
  }

  acelerar(){
    const aceleracao = 5;
    this.alterarVelocidade(5);
  }

  frear(){
    const frenagem = 5;
    this.alterarVelocidade(-5)
  }
}

const carro = new Carro('Chevrolet','Prisma', 200);

// Herança

class Camaro extends Carro{
  private turbo: boolean = false;

  constructor(){
    super('Chevrolet','Camaro', 300);
  }

  ligarTurbo(){
    this.turbo = true;
  }

}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();