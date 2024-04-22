const cityEl = document.querySelector(".city")
const tempEl = document.querySelector(".temp")
const descriptionEl = document.querySelector(".description")
const tempMinEl = document.querySelector(".min")
const tempMaxEl = document.querySelector(".max")

class WeatherView{
    changeCard(response){
        cityEl.innerHTML = `${response.name}`
        tempEl.innerHTML = `${response.main.temp.toFixed()}ºC`
        descriptionEl.innerHTML = `${response.weather[0].description.toUpperCase()}`
        tempMinEl.innerHTML = `${response.main.temp_min.toFixed()}ºC`
        tempMaxEl.innerHTML = `${response.main.temp_max.toFixed()}ºC`
    }
}