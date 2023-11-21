import React, { Component } from 'react';

export default class Increment extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
    };
  }
  incrementVal() {
    // this.setState(
    //   {
    //     id: this.state.id + 1,
    //   },
    //   () => console.log('callback value: ', this.state.id)
    // );
    this.setState(prevState =>({
      id: prevState.id
    }))
    console.log('real value: ', this.state.id);
  }
  increment() {
    this.incrementVal();
    this.incrementVal();
    this.incrementVal();
    this.incrementVal();
    this.incrementVal();
  }
  render() {
    return (
      <div>
        <h1>{this.state.id}</h1>
        <button onClick={() => this.increment()}>Increment value</button>
      </div>
    );
  }
}