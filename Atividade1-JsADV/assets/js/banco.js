const dinheiroEl = document.getElementById("money")
const saldoEl = document.getElementById("valor")
const msgElSucess = document.getElementById("msgSucess")
const msgElFail = document.getElementById("msgFail")

class Conta {
    saldo;
    constructor(saldo) {
        this.saldo = saldo
    }
    deposito(dinheiro) {
        if (isNaN(dinheiro) || dinheiro <= 0) {
            msgElFail.innerHTML = `Valor inválido.`
            msgElSucess.innerHTML = ''
        } else {
            this.saldo += dinheiro
            saldoEl.innerHTML = this.saldo
            msgElSucess.innerHTML = `Depósito realizado com sucesso.`
            msgElFail.innerHTML = ''
        }
    }
    saque(dinheiro) {
        if (isNaN(dinheiro) || dinheiro <= 0) {
            msgEl.innerHTML = `Valor inválido.`
        } else {
            if (this.saldo >= dinheiro) {
                this.saldo -= dinheiro
                saldoEl.innerHTML = this.saldo
                msgElSucess.innerHTML = `Saque realizado com sucesso.`
                msgElFail.innerHTML = ''
            } else {
                msgElFail.innerHTML = `Saldo Insuficiente.`
                msgElSucess.innerHTML = ''
            }
        }
    }
}

function deposito() {
    const dinheiro = parseFloat(dinheiroEl.value)
    const saldo = parseFloat(saldoEl.innerText)
    const carteira = new Conta(saldo)
    carteira.deposito(dinheiro)
}
function saque() {
    const dinheiro = parseFloat(dinheiroEl.value)
    const saldo = parseFloat(saldoEl.innerText)
    const carteira = new Conta(saldo)
    carteira.saque(dinheiro)
}