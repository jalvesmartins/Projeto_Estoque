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
exports.valorTotal = exports.retirar = exports.adicionar = exports.listar = void 0;
const serviceEstoque_1 = __importDefault(require("../service/serviceEstoque"));
function listar() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dados = yield serviceEstoque_1.default.listar();
            console.log(dados);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.listar = listar;
function adicionar(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const itemAdicionado = yield serviceEstoque_1.default.adicionar(data);
            console.log('Produto cadastrado com sucesso!');
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.adicionar = adicionar;
function retirar(nome) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const itemRetirado = yield serviceEstoque_1.default.retirar(nome);
            console.log('Produto retirado com sucesso!');
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.retirar = retirar;
function valorTotal(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const valorTotal = yield serviceEstoque_1.default.valorTotal(data);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.valorTotal = valorTotal;
