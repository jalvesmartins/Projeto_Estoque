"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const controleEstoque_1 = require("./controller/controleEstoque");
const receber = require('prompt-sync')({ sigint: true });
const textoInicial = 'Bem vindo ao Estoque, selecione uma opção:\nVer estoque: 1\nAdicionar um item: 2\nRemover um item: 3\nVer valor total do estoque: 4\n';
console.log(textoInicial);
let action = receber();
const base = () => __awaiter(void 0, void 0, void 0, function* () {
    switch (action) {
        case '1':
            yield (0, controleEstoque_1.listar)();
            break;
        case '2':
            const data = {
                nome: '',
                peso: 0,
                valor: 0,
                quantidade: 0
            };
            console.log('Nome do produto:');
            data.nome = receber();
            console.log('Peso do produto:');
            data.peso = parseInt(receber());
            console.log('Valor do produto:');
            data.valor = parseInt(receber());
            console.log('Quantidade do produto:');
            data.quantidade = parseInt(receber());
            yield (0, controleEstoque_1.adicionar)(data);
            break;
        case '3':
            console.log('Nome do produto que deseja excluir:');
            const nome = receber();
            yield (0, controleEstoque_1.retirar)(nome);
            break;
        case '4':
            console.log(`Valor total = ${controleEstoque_1.valorTotal}`);
    }
});
base();
