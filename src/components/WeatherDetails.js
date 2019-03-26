import React, {Component} from 'react';
import '../owfont-master/css/owfont-regular.css';

export default class WeatherDetails extends Component{

    render()
    {
        let days = this.props.forecast.map((day)=>{
            let iconId = day.weather.map((w)=> {
                return (w.id)
            });
            //let iconString = 'owf owf-'+iconId+' owd-5x';
            let iconString = 'owf owf-'+iconId+' owf-3x owf-pull-left owf-border';
            return(<div>
                    <p>{day.dt_txt}</p>
                    <p>Min: {day.main.temp_min}°C</p>
                    <p>Max: {day.main.temp_max}°C</p> 
                    <i className={iconString}></i>
                </div>
            )
        })
        
        return(<div>
            {days}
        </div>);
    }
}