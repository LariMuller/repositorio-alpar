class ControleIluminacao {
    static instance
    observers = []
    constructor() {
        if (!ControleIluminacao.instance) {
            ControleIluminacao.instance = this;
        }
        return ControleIluminacao.instance
    }

    toggle(btnClass){
        if (btnClass.classList.contains('off')){
          btnClass.classList.remove('off')  
          btnClass.classList.add('on')
          this.executaObservers()
        }
         else if (btnClass.classList.contains("on")){
            btnClass.classList.remove('on')  
            btnClass.classList.add('off')
            this.executaObservers()
        }
    }
    registraObserver(observer){
        this.observers.push(observer)
    }
    removeObserver(observer){
        const index = this.observers.findIndex(func => func == observer)
        if (index >= 0){
            this.observers.splice(index, 1)
        }
    }
    executaObservers(){
        for (let observer of this.observers){
            observer()
        }
    }

}
