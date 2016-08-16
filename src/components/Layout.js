import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';


export default class Layout extends Component {
  constructor(){
    super(); 
    this.state = {text: "",};
  }
  handleChanges(event){
    const text = event.target.value;
    console.log(text);
    this.setState({text});
  }
  render() {
    return (
      <div>
        <Header />
        <input onChange={(event)=> this.handleChanges(event)} />
        <button disabled={this.state.text.length === 0}>Show</button>
        <h1>You typed {this.state.text}</h1>
        <Footer />
      </div>
    );
  }
}
