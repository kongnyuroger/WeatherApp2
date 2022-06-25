let weather = {
    "apiKey": "59e4e5885149aa4a718c835d5f04a5c9",
    fetchWeather: function ( ){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=ecbb3886f8fe3f8258d1cae670ce6cde"
            ).then((response) => response.json())
            .then((data) => console.log(data));
    }
}
 
