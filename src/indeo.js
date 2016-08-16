import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/bootstrap.css';

/* eslint-disable */
var Card = React.createClass({
  getInitialState: function() {
    return {};
  },
  componenentDidMount: function() {
    var component = this;
    this.serverRequest = $.get("https://api.github.com/users/petehunt", function (data) {
      component.setState(data);
    }.bind(this));
  },
  render: function() {
    return(
      <div>
          <img src={this.state.avatar_url} width="80" alt="ges here"/>
          <h3>{this.state.name}</h3>
          <hr/>
      </div>
    );
  }
});

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <Card login="petehunt" />
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('root'));
