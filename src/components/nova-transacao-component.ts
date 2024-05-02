import { formatarMoeda } from "../utils/formatters.js"
import { Transacao } from "../types/transacao.js"
import { TipoTransacao } from "../types/tipoTransacao.js"

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement

elementoFormulario.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!elementoFormulario.checkValidity()) {
        alert('Por favor preencha todos os campos da transação!')
        return
    }


    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement
    const tipoValor = elementoFormulario.querySelector('#valor') as HTMLInputElement
    const tipoData = elementoFormulario.querySelector('#data') as HTMLInputElement

    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao
    let valor: number = tipoValor.valueAsNumber
    let data: Date = new Date(tipoData.value)

    if(tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor
    } else if(tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor
    }else {
        alert("Tipo de transação é inválido!")
        return
    }

    elementoSaldo.textContent = formatarMoeda(saldo)

    const novaTransacao: Transacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }


    console.log(novaTransacao)
    elementoFormulario.reset()
})