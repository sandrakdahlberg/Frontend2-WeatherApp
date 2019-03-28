import React, {Component} from 'react';
import PositionWeather from './PositionWeather';
import WeatherDetails from './WeatherDetails';
import '../App.css';
import Search from './Search';
import FavoritesList from './FavoritesList';

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
        this.addToFavorites = this.addToFavorites.bind(this);
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
        .then(jsondata => this.setState({forecast: jsondata.list}))
    }

    addToFavorites(city)
    {
        if(localStorage.getItem('favorites') === null)
        {
            let newFavoritesArray = [];
            newFavoritesArray.push(city);
            localStorage.setItem('favorites', JSON.stringify(newFavoritesArray));
        }
        else
        {
            let mySavedFavorites = localStorage.getItem('favorites');
            let savedFavorites =JSON.parse(mySavedFavorites);
            savedFavorites.push(city);
            localStorage.setItem('favorites', JSON.stringify(savedFavorites));
        }
        
        window.location.reload();

    }

    render()
    {
        //Hämta favoriter om det finns sparat i localstorage
        let myFavoritesArray;
        if(localStorage.getItem('favorites') !== "")
        {
            let favorites = localStorage.getItem('favorites');
            myFavoritesArray = JSON.parse(favorites);
        }
        
        
        return (<div>
            <Search search={this.searchCity}/> 
            <PositionWeather save={this.addToFavorites} id={this.state.id} city={this.state.city} weather={this.state.weather} />
            <WeatherDetails forecast={this.state.forecast} /> 
            <FavoritesList favorites={myFavoritesArray} getWeather={this.searchCity}/>           
        </div>);
    }
}