import React from "react";
import PropTypes from "prop-types";
import './WeatherSlide.css';
import weatherApi from "../../api/WeatherApi";

import weatherImages from "../../assets/weather/weather";
import GenericBlueBackground from "../../assets/generic-blue-background.jpg";

class WeatherSlide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cityId: this.props.slide.cityId,
            weatherConditionId: 0,
            temperature: null,
            temperatureUnit: process.env.REACT_APP_WEATHER_UNITS
        }
    }

    componentWillMount() {
        weatherApi.getWeather(this.state.cityId)
            .then(weather => {
                this.setState({weatherConditionId: weather.weather[0].id, temperature: weather.main.temp});
            });
    }

    buildImage() {
        const {weatherConditionId} = this.state;

        let image;

        if (weatherConditionId >= 200 && weatherConditionId < 300) {
            image = weatherImages.cloudy;
        } else if (weatherConditionId >= 300 && weatherConditionId < 600) {
            image = weatherImages.rainy;
        } else if (weatherConditionId >= 600 && weatherConditionId < 700) {
            image = weatherImages.snowy;
        } else if (weatherConditionId >= 700 && weatherConditionId < 800) {
            image = weatherImages.foggy;
        } else if (weatherConditionId >= 800 && weatherConditionId < 805) {
            image = weatherImages.sunny;
        } else {
            image = GenericBlueBackground;
        }

        return (
            <img className="scaleimage" src={image} alt=""/>
        )
    }

    buildText() {
        const {temperature, temperatureUnit} = this.state;

        if (temperature === "undefined") {
            return (
                <h1 className="text_over_image">Could not retrieve weather information.</h1>
            )
        }

        let units;
        if (temperatureUnit === "imperial") {
            units = "F"
        } else {
            units = "C"
        }

        return (
            <h1 className="text_over_image">{temperature} &deg;{units}</h1>
        )
    }

    render() {
        return (
            <div>
                {this.buildImage()}
                {this.buildText()}
            </div>
        );
    }
}

WeatherSlide.propTypes = {
    slide: PropTypes.shape({
        id: PropTypes.number.isRequired,
        cityId: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired
    })
};

export default WeatherSlide;