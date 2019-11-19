
var cityElement = document.getElementById("searchInput").value;
const weather = {};
const key = "b6c0dee41c3b13be7620763da1f9352b";
document.body.style.backgroundImage = "url('./img/bgimg.jpg')";

function getWeather(cityName) {
    fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            cityName +"&units=metric"+
            "&appid=" +
            key
        )
        .then(function(resp) {
            return resp.json();
        }) // Convert data to json
        .then(function(data) {
            console.log(data);
            var celcius =parseInt(data.main.temp);
         
            var description = data.weather[0].description;

            document.getElementById("weather-desc").innerHTML = description;
            document.getElementById("weather-temp").innerHTML = celcius + "&deg;";
            document.getElementById("weather-icon").src = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
        });
  
}

document.getElementById("searchBtn").addEventListener("click", function() {
    var cityN = document.getElementById("searchInput").value;
    getWeather(cityN);
  
});

