"use strict";
var Data = /** @class */ (function () {
    //public dia: number;
    //mes: number;
    //ano: number;
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        /*this.dia = dia;
        this.mes = mes;
        this.ano = ano;*/
    }
    return Data;
}());
var data = new Data(25, 6, 1992);
console.log(data.dia + "/" + data.mes + "/" + data.ano);
var data2 = new Data(1, 1);
