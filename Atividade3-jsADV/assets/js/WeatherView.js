const cityEl = document.querySelector(".city")
const tempEl = document.querySelector(".temp")
const descriptionEl = document.querySelector(".description")
const tempMinEl = document.querySelector(".min")
const tempMaxEl = document.querySelector(".max")
const cardEl = document.querySelector(".card")

class WeatherView{
    changeCard(response){
        cardEl.classList.add("card-show")
        cityEl.innerHTML = `${response.name}`
        tempEl.innerHTML = `${response.main.temp.toFixed()}ºC`
        descriptionEl.innerHTML = `Descrição: ${response.weather[0].description.toUpperCase()}`
        tempMinEl.innerHTML = `Min: ${response.main.temp_min.toFixed()}ºC`
        tempMaxEl.innerHTML = `Max: ${response.main.temp_max.toFixed()}ºC`
    }
}