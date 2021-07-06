import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };
  }

 
  render() {
    return (
      <div>
      <p>{this.props.info.name}</p>
      <img src={this.props.info.sprites.back_default} />
      </div>
    );
  }
}

export default Card;