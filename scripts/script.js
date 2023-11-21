async function weatherForecast(){

    const APIKey = 'db287eec8a7af033e2e53a34c65ee4a0';
    let city = 'pontianak';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;

    try {
        const response = await fetch(url);
        const result = await response.text();
        const myObj = JSON.parse(result);

        console.log(myObj);
    } catch (error) {
        console.error(error.message);
    }
}

weatherForecast();