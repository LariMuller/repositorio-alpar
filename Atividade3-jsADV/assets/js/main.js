const controller = new WeatherController()
const inputBtn = document.querySelector("#input-btn")
const inputCity = document.querySelector("#input-city")

inputBtn.addEventListener('click', () =>{
    controller.showData(inputCity.value)
})