const dinheiroEl = document.getElementById("money")
const saldoEl = document.getElementById("valor")
const msgEl = document.getElementById("msg")

class Conta {
    saldo;
    constructor(saldo){
        this.saldo = saldo
    }
    deposito(dinheiro){
        this.saldo += dinheiro
        document.getElementById("valor").innerHTML = this.saldo
        msgEl.innerHTML = `Depósito realizado com sucesso.`
    }
    saque(dinheiro){
        if (this.saldo >= dinheiro){
            this.saldo -= dinheiro
            document.getElementById("valor").innerHTML = this.saldo
            msgEl.innerHTML = `Saque realizado com sucesso.`
        }else{
            msgEl.innerHTML = `Saldo Insuficiente.`
        }
    }
}

function deposito(){
    const dinheiro = parseFloat(dinheiroEl.value)
    const saldo = parseFloat(saldoEl.innerText)
    const carteira = new Conta(saldo)
    carteira.deposito(dinheiro)
}
function saque(){
    const dinheiro = parseFloat(dinheiroEl.value)
    const saldo = parseFloat(saldoEl.innerText)
    const carteira = new Conta(saldo)
    carteira.saque(dinheiro)
}