import React, {Component} from 'react';
import PositionWeather from './PositionWeather';
import WeatherDetails from './WeatherDetails';
import '../App.css';

export default class WeatherApp extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            weather: [],
            city: '',
            forecast: [],
            id: []
        };
        
    }

    componentDidMount()
    {
        let city = 'stockholm';
        let country = 'sweden';

        fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&APPID=cfa34709cd1491ef1163884d1f699f67&units=metric')
        .then(response => response.json())
        .then(json => this.setState({weather : json.main, city: json.name, id: json.weather}))

        //fetch för 5 dygns prognos
        fetch('http://api.openweathermap.org/data/2.5/forecast?q='+city+','+country+'&appid=cfa34709cd1491ef1163884d1f699f67&units=metric')
        .then(resp => resp.json())
        .then(jsondata => this.setState({forecast: jsondata.list}))
    }

    render()
    {
        return (<div>
            <PositionWeather id={this.state.id} city={this.state.city} weather={this.state.weather} />
            <WeatherDetails forecast={this.state.forecast} />
        </div>);
    }
}