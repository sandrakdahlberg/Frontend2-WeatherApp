import React, {Component} from 'react';
import '../owfont-master/css/owfont-regular.css';
import '../App.css';

export default class WeatherDetails extends Component{

    render()
    {  
               
        let days = this.props.forecast.map((day)=>{
            let iconId = day.weather.map((w)=> {
                return (w.id)
            });
            let iconString = 'owf owf-'+iconId+' owd-5x';
            //let iconString = 'owf owf-'+iconId+' owf-3x owf-pull-left owf-border';
            let date = new Date(day.dt_txt);
            
            let thisday;            

            switch (date.getDay()) {
                case 0:
                thisday = "Söndag";
                  break;
                case 1:
                thisday = "Måndag";
                  break;
                case 2:
                thisday = "Tisdag";
                  break;
                case 3:
                thisday = "Onsdag";
                  break;
                case 4:
                thisday = "Torsdag";
                  break;
                case 5:
                thisday = "Fredag";
                  break;
                case 6:
                thisday = "Lördag";
              }

            let hour = date.getHours();
            if(hour < 10)
            {
              hour = '0'+hour;
            }

            return(<li className='weatherCard'>
                  
                  <h5>{thisday}</h5>
                  <p>{hour}:00</p>
                  <p className='minAndMax'>{day.main.temp_min}°C</p>
                  <p className='minAndMax'>{day.main.temp_max}°C</p> 
                  <i className={iconString}></i>
                  
                </li>
            )
        })
        
        return(<ul id='Forecast'>
          <h1 className='FiveDaysForecastHeadline'>Prognos kommande 5 dagar</h1>
          <li className='weatherCard weatherCardHeadlines'>
            <h5>Dag</h5>
            <p>Tid</p>
            <p className='minAndMax'>Min</p>
            <p className='minAndMax'>Max</p> 
          </li>
            {days}
        </ul>);
    }
}