import React, {Component} from 'react';

export default class Search extends Component{

    render()
    {
        return(<div>
            <input type="text" ref={(val) => this.searchValue = val} />
            <button onClick={ () => this.props.search(this.searchValue.value)}>Sök</button>
        </div>)
    }
}