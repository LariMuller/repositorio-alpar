class ControleIluminacao {
    static instance
    sala = false;
    cozinha = false;
    quarto = false;
    banheiro = false;
    observers = []

    toggle(room){
        if(room == 'sala'){
            this.sala = this.sala ? false : true
        } else if (room == "cozinha"){
            this.cozinha = !this.cozinha
        } else if (room == "quarto"){
            this.quarto = !this.quarto
        } else if (room == "banheiro"){
            this.banheiro = !this.banheiro
        }
        
        this.executar()
    }

    inscrever(func){
        this.observers.push(func)
    }

    executar(){
        this.observers.forEach((func)=>{
            func()
        })
    }

}
ControleIluminacao.instance = new ControleIluminacao()