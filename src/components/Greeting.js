import React, { Component } from 'react';

class Greeting extends Component {

  render() {
    return (
      <div>
        {console.log(this.props.message)}
      </div>
    );
  }

}

export default Greeting;
