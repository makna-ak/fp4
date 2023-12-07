async function weatherForecast(event){

    event.preventDefault();

    const APIKey = 'db287eec8a7af033e2e53a34c65ee4a0';
    let city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;

    try {
        const response = await fetch(url);
        const result = await response.text();
        const resultObj = JSON.parse(result);

        console.log(resultObj);

        // Get cityname from object and check if its defined
        let cityName = resultObj.name;
        if (cityName == undefined) {
            document.getElementById("weather-content").style.display = "none";
            document.getElementById("invalid").innerHTML = 'City ' + city + ' not found.';
            throw new Error(`City ${city} not found`);
        } else {
            // Remove the error city not found
            document.getElementById("invalid").innerHTML = ''

            document.getElementById("weather-content").style.display = "block";
            
            // Display city name
            document.getElementById("cityName").innerHTML = `City: ${cityName}`;

            // Display weather condition
            let condition = resultObj.weather[0].description;
            document.getElementById("condition").innerHTML = `Conditions: ${condition}`;

            // Display temperature
            let temp = resultObj.main.temp;
            document.getElementById("temp").innerHTML = `Temperatures: ${temp} °C`;

            // Display wind speed
            let wind = resultObj.wind.speed;
            document.getElementById("wind").innerHTML = `Wind Speed: ${wind} meter/sec`;
        }

    } catch (error) {
        console.error(error.message);
    }
}