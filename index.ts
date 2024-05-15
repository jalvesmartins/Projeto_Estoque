import { adicionar, listar, retirar, valorTotal } from "./controller/controleEstoque";
import Data from "./model/Data";

const receber = require('prompt-sync')({ sigint: true });

const textoInicial = 'Bem vindo ao Estoque, selecione uma opção:\nVer estoque: 1\nAdicionar um item: 2\nRemover um item: 3\nVer valor total do estoque: 4\n';

console.log(textoInicial);
let action = receber();

const base = async () => {
    switch (action) {

        case '1':
            await listar();
            break;
        case '2':
            const data:Data = {
                nome:'',
                peso:0,
                valor:0,
                quantidade:0
            };
            console.log('Nome do produto:')
            data.nome = receber();
            console.log('Peso do produto:')
            data.peso = parseInt (receber());
            console.log('Valor do produto:')
            data.valor = parseInt (receber());
            console.log('Quantidade do produto:')
            data.quantidade = parseInt (receber());
            await adicionar(data);
            break;
        case '3':
            console.log('Nome do produto que deseja excluir:')
            const nome = receber();
            await retirar(nome);
            break;
        case '4':
            console.log(`Valor total = ${valorTotal}`)    
    }
}

base();