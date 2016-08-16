import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';


export default class Layouts extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     text: "",
  //     list: ["",],
  //   };
  // }
  constructor(){
    super();
    this.state = {
      counts: 3
    };
  }
  incrementCount(){
    this.setState({
      counts: this.state.counts + 1
    });
  }

  render() {
    return (
      <div>
        <Header />
        <p>{this.state.counts}</p>
        <button type="button" onClick={this.incrementCount} className="btn btn-md btn-success">Add</button>
        <Footer />
      </div>
    );
  }
}
