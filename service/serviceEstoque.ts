import { error } from 'console';
import Data from '../model/Data';
import readCSV from '../model/readCSV';
import writeCSV from '../model/writeCSV';
import fs from 'fs';

const filePath = './model/estoque.csv';

class ServiceEstoque {
    async listar() {
        const dados = await readCSV(filePath);
        if (dados.length == 0) {
            throw new Error('Estoque vazio');
        }
        return dados;
    }
    async adicionar(data:Data) {
        if(data.nome == null || data.nome == undefined){
            throw new Error('Nome inválido')
        }
        if(isNaN(data.peso)){
            throw new Error('Peso inválido')
        }
        if(isNaN(data.valor)){
            throw new Error('Valor inválido')
        }
        if(isNaN(data.quantidade)){
            throw new Error('Quantidade inválida')
        }
        await writeCSV(filePath, [data]);
    }
    async retirar(nome:string) {
        const dados = await readCSV(filePath);
        if(dados.length == 0){
            throw new Error ('Estoque vazio')
        }
        const posicao = dados.findIndex(dado => dado.nome == nome);
        if(posicao == -1){
            throw new Error ('Produto inexistente')
        }
        dados.splice(posicao, 1);
        fs.writeFileSync(filePath, '');
        fs.appendFileSync(filePath, 'nome,peso,valor,quantidade\n');
        writeCSV (filePath, dados);
    }
    async valorTotal(data:Data) {
        const valor = data.valor;
        const quantidade = data.quantidade;
        function multiplicar(valor:number, quantidade:number) {
            return valor * quantidade;
        }
        const dados = await readCSV(filePath);
        if(dados.length == 0){
            throw new Error ('Estoque vazio')
        }
        return multiplicar(valor, quantidade);
    }
}

export default new ServiceEstoque;