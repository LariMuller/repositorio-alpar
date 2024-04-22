class WeatherController{
    static instance
    data
    view
    service 
    constructor(){
        this.data = new WeatherModel()
        this.view = new WeatherView()
        this.service = new WeatherService()
    }

    async showData(inputCity){
        this.data = await this.service.request(inputCity)
        return this.data
    }

    //OBSERVERS
    observers = []
    inscrever(observerFn){
        this.observers.push(observerFn)
    }
    
    executar(){
        this.observers.forEach((observerFn)=>{
            observerFn(data)
        })
    }
}
WeatherController.instance = new WeatherController()
