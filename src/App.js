// create your App component here
import React, {Component} from 'react'

class App extends Component {

  state = {
    folksInSpace: []
  }

  render() {
    return(
      <div>
        {this.state.folksInSpace.map(person => person.name)}
      </div>
    )
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
      return this.setState({
        folksInSpace: data.people
      })
    })
  }

}

export default App
