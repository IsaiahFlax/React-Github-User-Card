import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from "./components/UserCard"
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }
  componentDidMount(){
    function getUser() {
      return axios.get('https://api.github.com/users/IsaiahFlax');
    }

    function getFollowers(){
      return axios.get('https://api.github.com/users/IsaiahFlax/followers');
    }

    axios.all([getUser(), getFollowers()])
    .then(axios.spread((user, followers) => {
      console.log("data", user.data, "followers", followers.data);
      this.setState({ user: user.data }); 
      this.setState({followers: followers.data
      })
    }))
    .catch(err => {
      console.log(err)
    })
  }



  render(){
    return(
      <div>
        {console.log("followers", this.state.followers)}
        {console.log("user", this.state.user)}
      <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
