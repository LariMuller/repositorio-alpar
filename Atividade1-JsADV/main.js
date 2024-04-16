const dinheiroEl = document.getElementById("money")
const saldoEl = document.getElementById("valor")
const msgEl = document.getElementById("msg")

class Conta {
    saldo;
    constructor(saldo) {
        this.saldo = saldo
    }
    deposito(dinheiro) {
        if (isNaN(dinheiro) || dinheiro <= 0) {
            msgEl.innerHTML = `Valor inválido.`
        } else {
            this.saldo += dinheiro
            document.getElementById("valor").innerHTML = this.saldo
            msgEl.innerHTML = `Depósito realizado com sucesso.`
        }
    }
    saque(dinheiro) {
        if (isNaN(dinheiro) || dinheiro <= 0) {
            msgEl.innerHTML = `Valor inválido.`
        } else {
            if (this.saldo >= dinheiro) {
                this.saldo -= dinheiro
                document.getElementById("valor").innerHTML = this.saldo
                msgEl.innerHTML = `Saque realizado com sucesso.`
            } else {
                msgEl.innerHTML = `Saldo Insuficiente.`
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