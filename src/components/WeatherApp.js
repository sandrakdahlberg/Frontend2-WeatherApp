import React, {Component} from 'react';
import PositionWeather from './PositionWeather';
import WeatherDetails from './WeatherDetails';
import '../App.css';
import Search from './Search';

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
        this.searchCity = this.searchCity.bind(this);
        this.showLocation = this.showLocation.bind(this);
    }

    componentDidMount()
    {
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(this.showLocation);
        }
        else{

        let city = 'stockholm';
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=cfa34709cd1491ef1163884d1f699f67&units=metric')
        .then(response => response.json())
        .then(json => this.setState({weather : json.main, city: json.name, id: json.weather}))

        //fetch för 5 dygns prognos
        fetch('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=cfa34709cd1491ef1163884d1f699f67&units=metric')
        .then(resp => resp.json())
        .then(jsondata => this.setState({forecast: jsondata.list}))
        }   
        
    }

    showLocation(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        fetch('http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&APPID=cfa34709cd1491ef1163884d1f699f67&units=metric')
        .then(response => response.json())
        .then(json => this.setState({weather : json.main, city: json.name, id: json.weather}))

        fetch('http://api.openweathermap.org/data/2.5/forecast?lat='+latitude+'&lon='+longitude+'&appid=cfa34709cd1491ef1163884d1f699f67&units=metric')
        .then(resp => resp.json())
        .then(jsondata => this.setState({forecast: jsondata.list}))
        
     }

    searchCity(city)
    {
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=cfa34709cd1491ef1163884d1f699f67&units=metric')
        .then(r => r.json())
        .then(j => this.setState({weather : j.main, city: j.name, id: j.weather}))

        //fetch för 5 dygns prognos
        fetch('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=cfa34709cd1491ef1163884d1f699f67&units=metric')
        .then(res => res.json())
        .then(jsondate => this.setState({forecast: jsondate.list}))
    }

    render()
    {
        return (<div>
            <PositionWeather id={this.state.id} city={this.state.city} weather={this.state.weather} />
            <Search search={this.searchCity}/>
            <WeatherDetails forecast={this.state.forecast} />            
        </div>);
    }
}