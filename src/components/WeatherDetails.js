import React, {Component} from 'react';
import '../owfont-master/css/owfont-regular.css';

export default class WeatherDetails extends Component{

    render()
    {
        let days = this.props.forecast.map((day)=>{
            let img = day.id;
            return(<div>
                    <p>{day.dt_txt}</p>
                    <p>Min: {day.main.temp_min}°C</p>
                    <p>Max: {day.main.temp_max}°C</p> 
                    <i className="owf owf-800 owd-5x"></i>
                </div>
            )
        })
        
        return(<div>
            {days}
        </div>);
    }
}