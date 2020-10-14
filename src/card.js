import React, { Component } from 'react';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="card">
                <img src={this.props.pic} class="card-img-top" alt="Product pic"></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">Rs: <span>{this.props.price}</span></p>
                </div>
            </div>
         );
    }
}
 
export default Card;