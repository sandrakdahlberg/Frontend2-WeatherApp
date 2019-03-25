import React, {Component} from 'react';
import PositionWeather from './PositionWeather';

export default class WeatherApp extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            weather: [],
            city: ''
        };
        
    }

    componentDidMount()
    {
        let city = 'stockholm';
        let country = 'sweden';

        fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&APPID=cfa34709cd1491ef1163884d1f699f67&units=metric')
        .then(response => response.json())
        .then(json => this.setState({weather : json.main, city: json.name}))

        //url för 5 dygns prognos
        // https://api.openweathermap.org/data/2.5/forecast?id=2673730&appid=cfa34709cd1491ef1163884d1f699f67&units=metric

    }

    render()
    {
        return (<div>
            <PositionWeather city={this.state.city} weather={this.state.weather} />
        </div>);
    }
}