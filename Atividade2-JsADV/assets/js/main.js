const salaBtn = document.querySelector(".salaBtn")
    const salaLight = document.getElementById('sala')
const quartoBtn = document.querySelector(".quartoBtn")
    const quartoLight = document.getElementById('quarto')
const cozinhaBtn = document.querySelector(".cozinhaBtn")
    const cozinhaLight = document.getElementById('cozinha')
const banheiroBtn = document.querySelector(".banheiroBtn")
    const banheiroLigth = document.getElementById('banheiro')


    salaBtn.addEventListener('click', ()=>{
        ControleIluminacao.instance.toggle("sala")
    })
    quartoBtn.addEventListener('click', ()=>{
        ControleIluminacao.instance.toggle("quarto")
    })
    cozinhaBtn.addEventListener('click', ()=>{
        ControleIluminacao.instance.toggle("cozinha")
    })
    banheiroBtn.addEventListener("click", ()=> {
        ControleIluminacao.instance.toggle("banheiro")
    })

    ControleIluminacao.instance.inscrever(()=>{
        if (ControleIluminacao.instance.sala){
            salaBtn.innerHTML = "Desligar"
            salaBtn.classList.add('on')
            salaLight.classList.add("ligado")
            salaLight.innerHTML = "Ligada"
        } else {
            salaBtn.innerHTML = "Ligar"
            salaBtn.classList.remove('on')
            salaLight.classList.remove('ligado')
            salaLight.innerHTML = "Desligada"
        }
    })
    ControleIluminacao.instance.inscrever(()=>{
        if (ControleIluminacao.instance.quarto){
            quartoBtn.innerHTML = "Desligar"
            quartoBtn.classList.add('on')
            quartoLight.classList.add("ligado")
            quartoLight.innerHTML = "Ligada"
        } else {
            quartoBtn.innerHTML = "Ligar"
            quartoBtn.classList.remove('on')
            quartoLight.classList.remove('ligado')
            quartoLight.innerHTML = "Desligada"
        }
    })
    ControleIluminacao.instance.inscrever(()=>{
        if (ControleIluminacao.instance.cozinha){
            cozinhaBtn.innerHTML = "Desligar"
            cozinhaBtn.classList.add('on')
            cozinhaLight.classList.add("ligado")
            cozinhaLight.innerHTML = "Ligada"
        } else {
            cozinhaBtn.innerHTML = "Ligar"
            cozinhaBtn.classList.remove('on')
            cozinhaLight.classList.remove('ligado')
            cozinhaLight.innerHTML = "Desligada"
        }
    })
    ControleIluminacao.instance.inscrever(()=>{
        if (ControleIluminacao.instance.banheiro){
            banheiroBtn.innerHTML = "Desligar"
            banheiroBtn.classList.add('on')
            banheiroLigth.classList.add("ligado")
            banheiroLigth.innerHTML = "Ligada"
        } else {
            banheiroBtn.innerHTML = "Ligar"
            banheiroBtn.classList.remove('on')
            banheiroLigth.classList.remove('ligado')
            banheiroLigth.innerHTML = "Desligada"
        }
    })