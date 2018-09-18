// create your App component here
import React, { Component } from 'react';
import Button from './components/Button.js';
import ExampleComponent from './components/ExampleComponent.js';
import Greeting from './components/Greeting.js';

class App extends Component {
  constructor(){
    super()
    this.state={
      message: "",
      number: null,
      peopleInSpace: [],
    }
  }

  render() {
    return (
      this.state.number ?
      <div>
      <Greeting message={this.state.message}/>
      <ExampleComponent number={this.state.number} /> <br/>
      {this.state.peopleInSpace.map( person =>
          <li> {person.name} </li>
      )} <br/>
      <Button />
      </div> : null
    );
  }


  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
      .then(r => r.json())
        .then(json =>
          this.setState({
            message: json.message,
            number: json.number,
            peopleInSpace: json.people
          })
      )}








}


export default App;
