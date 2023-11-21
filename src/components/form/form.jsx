import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
            <TextField
              id='outlined-basic'
              value={this.state.username}
              onChange={this.handlerUsernameChange}
              label='Outlined'
              required
              variant='outlined'
              helperText='Some important text'
            />
          </div>
          <div className='flex-row'>
            <textarea
              value={this.state.comments}
              name=''
              onChange={this.commentHandler}
              cols='19'
              rows='2'></textarea>
          </div>
          <div className='flex-row'>
            <select
              name=''
              id=''
              value={this.state.skill}
              onChange={this.skillHandler}>
              <option value='React'>React</option>
              <option value='Angular'>Angular</option>
              <option value='Vue Js'>Vue Js</option>
            </select>
          </div>
          <div className='mt-24 flex-row flex-right'>
            <Button
              variant='contained'
              onClick={() => alert(this.state.username)}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
