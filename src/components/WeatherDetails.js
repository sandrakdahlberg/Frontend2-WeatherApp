import React, {Component} from 'react';

export default class WeatherDetails extends Component{

    render()
    {
        let days = this.props.forecast.map((day)=>{
            return(<div>
                    <p>{day.dt_txt}</p>
                    <p>Min: {day.main.temp_min}°C</p>
                    <p>Max: {day.main.temp_max}°C</p> 
                    {/* <i className="owf owf-"{day.weather.id}"owd-5x"></i>                 */}
                </div>
            )
        })
        
        return(<div>
            {days}
        </div>);
    }
}