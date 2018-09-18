import React, { Component } from 'react';

class ExampleComponent extends Component {

  render() {
    return (
      <div>
        <strong>
          {this.props.number} people in Space!
        </strong>


      </div>
    )
  }

}

export default ExampleComponent;
