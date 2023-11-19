import React, { Component } from 'react';
import './form.css';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.result = '';
    this.state = {
      username: '',
    };
  }
  handlerUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  commentHandler = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  skillHandler = (event) => {
    this.setState({
      skill: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.username}`);
  };
  render() {
    return (
      <div>
        <h1>Hello : {this.result}</h1>
        <form className='flex' onSubmit={this.handleSubmit}>
          <div className='flex-row'>
            <label htmlFor='Username'>Username </label>
            <input
              type='text'
              value={this.state.username}
              onChange={this.handlerUsernameChange}
            />
          </div>
          <div className='flex-row'>
            <label htmlFor=''>Comments</label>
            <textarea
              value={this.state.comments}
              name=''
              onChange={this.commentHandler}
              cols='19'
              rows='2'></textarea>
          </div>
          <div className='flex-row'>
            <label
              htmlFor=''
              value={this.state.skill}
              onChange={this.skillHandler}>
              Topic
            </label>
            <select name='' id=''>
              <option value='React'>React</option>
              <option value='Angular'>Angular</option>
              <option value='Vue Js'>Vue Js</option>
            </select>
          </div>
          <button className='m-24'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
