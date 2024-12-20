//Api http://api.weatherapi.com/v1

//qué debe mostrar de la ciudad y país donde estamos?
//1-Tiempo
//  - estado del clima
//  - Imagen y grados celsius
//  - Precipitaciones, humedad y viento km/h.
//2- La previsión por horas en el día en el que estamos. Con su hora, imagen y grados celsius. 

//Cómo hacerlo?
//1- Hacer fetch de la Api-- Ver api key en sign up de la api
    //https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no
//2- Función para el estado del clima --> current.condition(text)
//     -para grados C --> current.temp_c y current.condition(icon)
//    - para el viento, humedad y precipitaciones --> wind_kph, humidity, cloud
//3- Función para previsión del tiempo por horas

const weatherDiv = document.getElementById('weather-div');
const allForecastDiv = document.createElement('div');
allForecastDiv.classList.add('allForecastDiv');

const apiKey = 'c2e7484d9de64bf991c101754241012';
const city = 'Valencia, Spain';

//!Función para obtener datos de la api
const getWeather = async () => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('No se pudo obtener los datos solicitados', error)
    }

};

 //!Función para mostrar detalles del clima
 const showWeather = (data) => {
    const location = document.createElement('h1');
    location.classList.add('location');
    location.textContent =  `${city} Weather`;

    const weatherInfoDiv = document.createElement('div');
    weatherInfoDiv.classList.add('weather-info');

    const weatherInfo1 = document.createElement('div');
    weatherInfo1.classList.add('weather-info1');

    const weatherInfo2 = document.createElement('div');
    weatherInfo2.classList.add('weather-info2');

    const condition = document.createElement('p');
    condition.classList.add('condition');
    condition.textContent = `${data.current.condition.text}`

    const temperature = document.createElement('p');
    temperature.classList.add('temperature');
    temperature.textContent = `${data.current.temp_c}ºC`;

    const weatherImg = document.createElement('img');
    weatherImg.classList.add('weather-img');
    weatherImg.src = `${data.current.condition.icon}`;
    weatherDiv.alt = 'Icono del tiempo actual';

    const wind = document.createElement('p');
    wind.classList.add('wind');
    wind.textContent = `Viento: ${data.current.wind_kph} km/h`;
    
    const humidity = document.createElement('p');
    humidity.classList.add('humidity');
    humidity.textContent = `Humedad: ${data.current.humidity}%`;

    const rain = document.createElement('p');
    rain.classList.add('rain');
    rain.textContent = `Precipitaciones: ${data.current.cloud}%`;

    weatherDiv.appendChild(weatherInfoDiv);
    weatherInfoDiv.appendChild(weatherInfo1);
    weatherInfoDiv.appendChild(weatherInfo2);
    weatherInfo1.appendChild(location);
    weatherInfo1.appendChild(weatherImg);
    weatherInfo1.appendChild(temperature);
    weatherInfo1.appendChild(condition);
    weatherInfo2.appendChild(wind);
    weatherInfo2.appendChild(humidity);
    weatherInfo2.appendChild(rain);

    const showForecast = () => {
        const forecastArray = data.forecast.forecastday[0].hour;
        console.log(forecastArray);
        forecastArray.forEach(hour => {
            const forecastDiv = document.createElement('div');
            forecastDiv.classList.add('forecast-div');

            const temperatureHour = document.createElement('p');
            temperatureHour.classList.add('temp-hour');

            const weatherHour = document.createElement('p');
            weatherHour.classList.add('weather-hour');

            const forecastImg = document.createElement('img');
            forecastImg.classList.add('forecast-img');

            const weatherToSplit = `${hour.time}`.split(''); //Para poder coger solo la hora
           // console.log(weatherToSplit);

            const weatherSplice = weatherToSplit.splice(11, 15);
            //console.log(weatherSplice);
            const weatherJoin = weatherSplice.join('');
            console.log(weatherJoin);

            weatherHour.textContent = weatherJoin;
            temperatureHour.textContent = `${hour.temp_c}ºC`;
            forecastImg.src = `${hour.condition.icon}`;
            forecastImg.alt = 'Ícono de clima';

            weatherDiv.appendChild(allForecastDiv);
            allForecastDiv.appendChild(forecastDiv);
            forecastDiv.appendChild(weatherHour);
            forecastDiv.appendChild(forecastImg);
            forecastDiv.appendChild(temperatureHour);
            
        });
    }
    showForecast();
}



getWeather().then(data => showWeather(data));
