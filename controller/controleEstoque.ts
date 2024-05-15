import Data from "../model/Data";
import ServiceEstoque from "../service/serviceEstoque";

export async function listar () {
    try {
        const dados = await ServiceEstoque.listar();
        console.log(dados);
    } catch (error) {
        console.log(error);
    }
}

export async function adicionar(data:Data) {
    try {
        const itemAdicionado = await ServiceEstoque.adicionar(data)
        console.log('Produto cadastrado com sucesso!');
    } catch (error) {
        console.log(error);
    }
}

export async function retirar(nome:string) {
    try {
        const itemRetirado = await ServiceEstoque.retirar(nome)
        console.log('Produto retirado com sucesso!');
    } catch (error) {
        console.log(error);
    }
}

export async function valorTotal(data:Data) {
    try {
        const valorEstoque = await ServiceEstoque.valorTotal(data);
        console.log(valorEstoque);
    } catch (error) {
        console.log(error);
    }
}

