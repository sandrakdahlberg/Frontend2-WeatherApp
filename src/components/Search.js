import React, {Component} from 'react';
import '../App.css';

export default class Search extends Component{

    render()
    {
        return(<div className='searchForm'>
            <input type="text" placeholder='Sök stad' ref={(val) => this.searchValue = val} />
            <button onClick={ () => this.props.search(this.searchValue.value)}>Sök</button>
        </div>)
    }
}