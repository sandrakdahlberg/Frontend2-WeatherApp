import React, {Component} from 'react';
import PositionWeather from './PositionWeather';

export default class WeatherApp extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            weather: []
        };
    }

    componentDidMount()
    {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&APPID=cfa34709cd1491ef1163884d1f699f67')
        .then(response => response.json())
        .then(json => this.setState({weather : json}))
    }

    render()
    {
        return (<div>
            <PositionWeather weather={this.state.weather} />
        </div>);
    }
}