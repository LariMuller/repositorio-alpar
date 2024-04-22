class WeatherService{
    async request(param) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=5cce04dff8f75bedeecd08163691d9c5&units=metric&lang=pt_br`
        try {
            const data = await fetch(url)
            const response = await data.json()
            const dados = new WeatherModel()
                dados.temp = response.main.temp
                dados.city = response.name
                dados.description = response.weather.description
                dados.temp_min = response.main.temp_min
                dados.temp_max = response.main.temp_max
            const view = new WeatherView()
                view.changeCard(response)
        } catch (error) {
            alert("Cidade não localizada, tente novamente")
        }
    }
}
