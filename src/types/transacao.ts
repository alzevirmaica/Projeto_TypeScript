import { TipoTransacao } from "./tipoTransacao.js";

export type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number
}