import React, { Component } from 'react';

export default class State extends Component{

    constructor(){
        super();
        this.state = {
            message: 'Hello Dear Visitor !',
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you Hassan for subscribing !',
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )

    }
}