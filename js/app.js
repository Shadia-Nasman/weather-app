var cityElement = document.getElementById("searchInput").value;

const key = "b6c0dee41c3b13be7620763da1f9352b";
document.body.style.backgroundImage = "url('./img/bgimg.jpg')";

function getWeather(cityName) {
    fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q=" +
            cityName + "&units=metric" +
            "&appid=" +
            key
        )
        .then(function(resp) {
            return resp.json();
        }) // Convert data to json
        .then(function(data) {
            //console.log(data);
            document.getElementById("cityName").innerHTML = data.city.name;
            for (var i = 0; i <= 40; i++) {

                var hour = data.list[i].td_txt;
                var onHour = hour.slice(11, 13);
                if (onHour = 15) {

                    var newDiv = document.createElement("div");

                    var celcius = parseInt(data.list[i].main.temp);
                    var day = hour.getday();

                    var description = data.list[i].weather[0].description;

                    newDiv.innerHTML = day + "het is " + description + " , temp: " + celcius + "&deg";
                    document.body.appendChild(newDiv);
                    var imgDiv = document.createElement("img");
                    imgDiv.src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png";
                    newDiv.appendChild(imgDiv);
                }
            }
        });

}

document.getElementById("searchBtn").addEventListener("click", function() {
    var cityN = document.getElementById("searchInput").value;
    getWeather(cityN);

});