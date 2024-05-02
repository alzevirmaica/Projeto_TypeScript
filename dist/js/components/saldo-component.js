import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/formatoData.js";
let saldo = 3000;
const elementoSaldo = document.querySelector('.saldo-valor .valor');
const elementoDataAcesso = document.querySelector('.block-saldo time');
elementoSaldo.textContent = formatarMoeda(saldo);
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
