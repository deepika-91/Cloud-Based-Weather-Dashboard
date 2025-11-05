async function getWeather() {
    let city = document.getElementById("cityInput").value;

    if (city === "") {
        document.getElementById("result").innerHTML = `<p>Please enter a city name.</p>`;
        return;
    }

    try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=02f99e45e573dfc467a0b462da0bc572&units=metric`
        );

        // Convert to JSON
        let data = await response.json();

        // If city not found or key wrong
        if (data.cod !== 200) {
            document.getElementById("result").innerHTML = `<p>Error: ${data.message}</p>`;
            return;
        }

        // Display weather data
        document.getElementById("result").innerHTML = `
            <p><b>${data.name}</b></p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;

    } catch (error) {
        document.getElementById("result").innerHTML = `<p>Network or API Error</p>`;
        console.error(error);
    }
}
