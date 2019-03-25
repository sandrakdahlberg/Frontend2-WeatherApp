import React, {Component} from 'react';

export default class PositionWeather extends Component{

    render()
    {
        let date = new Date();
        let shortDate = date.toLocaleDateString(); 
        let time = date.toLocaleTimeString();      
                
        return (
            <div>
                <h1>{this.props.city}</h1>
                <h3>{shortDate} {time}</h3>                
                <p>{this.props.weather.temp}°C</p>                
            </div>
        );
    }
}