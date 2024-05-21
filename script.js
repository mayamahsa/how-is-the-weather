
// function searchCity (city){
//     let apiKey = "3021a8370t640a32216df2b444ob443e";
//     let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
//     axios.get(apiUrl).then(refreshWeather);
// }
// function refreshWeather (response){
//     let tempratureElement = document.querySelector("#temprature");
//     let temprature =response.data.temprature.current;
//     let cityElement = document.querySelector("#city");
//     let cityData = response.data.city;
//     cityElement.innerHTML = cityData;
//     tempratureElement.innerHTML = Math.round(temprature);
// }
function refreshWeather (response){
    console.log(response.data.temperature.current);
    let tempratureElement = document.querySelector("#temprature");
    let temp = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    tempratureElement.innerHTML = Math.round(temp);
    cityElement.innerHTML = response.data.city;
}
function searchCity (city){
    let apiKey = "3021a8370t640a32216df2b444ob443e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
    axios.get(apiUrl).then(refreshWeather);
}
function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity ("Tehran");


