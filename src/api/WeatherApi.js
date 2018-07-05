class WeatherApi {

    getWeather(cityId) {

        const url = process.env.REACT_APP_OPEN_WEATHER_API_HOST + "/weather"
            + `?id=${cityId}`
            + `&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
            + `&units=${process.env.REACT_APP_WEATHER_UNITS}`;

        return fetch(url)
            .then(response => {
                return response.json()
            }).catch(error => {
                return error;
            })
    }
}

const weatherApi = new WeatherApi();
export default weatherApi;