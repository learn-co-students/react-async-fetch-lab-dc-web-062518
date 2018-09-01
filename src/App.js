import React, { Component } from 'react';

export default class App extends Component{
  state = {
    people: []
  }

  componentDidMount = ()=>{
    fetch('http://api.open-notify.org/astros.json')
    .then(r=>r.json())
    .then(json=> console.log(json))
  }

  render() {

    return (
      <div/>
    )
  }
}
