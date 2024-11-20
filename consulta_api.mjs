import https from 'https';

const apiKey = '0440102188bbf10f1f811e93bbb0d3da'; // Replace with your OpenWeatherMap API key
const city = 'Oxford'; // Replace with the city you want to get the weather for

const getWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    https.get(url, (response) => {
        let data = '';

        // A chunk of data has been received.
        response.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received.
        response.on('end', () => {
            if (response.statusCode === 200) {
                const weatherData = JSON.parse(data);
                console.log(`Weather in ${city}:`);
                console.log(`Temperature: ${weatherData.main.temp}°C`);
                console.log(`Weather: ${weatherData.weather[0].description}`);
            } else {
                console.error('Error:', response.statusMessage);
            }
        });
    }).on('error', (error) => {
        console.error('There has been a problem with your request:', error);
    });
};

getWeather(city);