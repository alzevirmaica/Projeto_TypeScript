import { formatarMoeda } from "../utils/formatters.js";
import { TipoTransacao } from "../types/tipoTransacao.js";
const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor preencha todos os campos da transação!');
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    const tipoValor = elementoFormulario.querySelector('#valor');
    const tipoData = elementoFormulario.querySelector('#data');
    let tipoTransacao = inputTipoTransacao.value;
    let valor = tipoValor.valueAsNumber;
    let data = new Date(tipoData.value);
    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação é inválido!");
        return;
    }
    elementoSaldo.textContent = formatarMoeda(saldo);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});
