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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readCSV_1 = __importDefault(require("../model/readCSV"));
const writeCSV_1 = __importDefault(require("../model/writeCSV"));
const fs_1 = __importDefault(require("fs"));
const filePath = './model/estoque.csv';
class ServiceEstoque {
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = yield (0, readCSV_1.default)(filePath);
            if (dados.length == 0) {
                throw new Error('Estoque vazio');
            }
            return dados;
        });
    }
    adicionar(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data.nome == null || data.nome == undefined) {
                throw new Error('Nome inválido');
            }
            if (isNaN(data.peso)) {
                throw new Error('Peso inválido');
            }
            if (isNaN(data.valor)) {
                throw new Error('Valor inválido');
            }
            if (isNaN(data.quantidade)) {
                throw new Error('Quantidade inválida');
            }
            yield (0, writeCSV_1.default)(filePath, [data]);
        });
    }
    retirar(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = yield (0, readCSV_1.default)(filePath);
            if (dados.length == 0) {
                throw new Error('Estoque vazio');
            }
            const posicao = dados.findIndex(dado => dado.nome == nome);
            if (posicao == -1) {
                throw new Error('Produto inexistente');
            }
            dados.splice(posicao, 1);
            fs_1.default.writeFileSync(filePath, '');
            fs_1.default.appendFileSync(filePath, 'nome,peso,valor,quantidade\n');
            (0, writeCSV_1.default)(filePath, dados);
        });
    }
    valorTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            let acumulador = 0;
            const dados = yield (0, readCSV_1.default)(filePath);
            if (dados.length == 0) {
                throw new Error('Estoque vazio');
            }
            function multiplicar(valor, quantidade) {
                return valor * quantidade;
            }
            dados.forEach(dados => {
                acumulador += multiplicar(dados.valor, dados.quantidade);
            });
            return acumulador;
        });
    }
}
exports.default = new ServiceEstoque;
