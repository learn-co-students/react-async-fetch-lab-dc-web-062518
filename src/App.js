// create your App component here
import React from 'react'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(r => r.json())
      .then(json => {
        console.log(json.people)
        this.setState({people: json.people})})
  }
  render() {
    if (this.state.people.length > 0) {
      return (this.state.people.map(person => {
        console.log(person)
        return <div>{person.name}</div>
      }))
    } else {
      return null
    }
  }
}
