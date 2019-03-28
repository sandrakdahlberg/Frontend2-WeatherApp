import React, {Component} from 'react';
import '../App.css';
import '../owfont-master/css/owfont-regular.css';

export default class PositionWeather extends Component{

    render()
    {
        let date = new Date();
        let shortDate = date.toLocaleDateString(); 
        let time = date.toLocaleTimeString();
        let iconId = this.props.id.map((n)=> {return n.id});
        let iconString = 'owf owf-'+iconId+' owf-5x';      
                
        return ( 
            <div className='currentInfo'>
                <h1>{this.props.city}<i className={iconString}></i></h1>
                <h3>{shortDate} {time}</h3>                
                <p>{this.props.weather.temp}°C</p>
                <button onClick={ () => this.props.save(this.props.city)}>Spara som favorit</button>
            </div>
        );
    }
}