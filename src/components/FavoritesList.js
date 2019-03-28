import React,{Component} from 'react';

export default class FavoritesList extends Component{

    render()
    {        
        
        let myListItems;

        if(this.props.favorites != null)
        {
            myListItems = this.props.favorites.map((fav)=> {
                return <li>{fav}</li>
            })
        }
        

        return(<div>
            <h1>Mina favoriter</h1>
            <ul>{myListItems}</ul>
        </div>);
    }
}