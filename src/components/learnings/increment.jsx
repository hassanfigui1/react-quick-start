import React, { Component } from 'react';

class Increment extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
  }
  incrementVal() {
      this.setState({
        id: this.state.id + 1,
      }, ()=> console.log('callback value: ', this.state.id));
    
    console.log('real value: ', this.state.id)
  }

  render() {
    return (
      <div>
        <h1>{this.state.id}</h1>
        <button onClick={() => this.incrementVal()}>Increment value</button>
      </div>
    );
  }
}

export default Increment;
