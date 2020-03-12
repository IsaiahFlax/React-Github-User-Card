import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/IsaiahFlax')
    .then(res => res.json())
    .then(data => this.setState({ data: data }))
    .catch(err => console.log("error"));

  }
  render(){
    return(
      <div>{console.log(this.state.data)}</div>
    )
  }
}

export default App;
