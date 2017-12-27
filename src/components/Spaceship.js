// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component{
  render(){
    return(
      <div className="spaceship">
        <div>{this.props.name}</div>
        
      </div>
    );
  }
}
