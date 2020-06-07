import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = { 
      events: [],
    }
  }

  componentDidMount() {
    fetch('api/events/')
    .then( response => {
      return response.json();
    })
    .then(data => {
      this.setState({events: data});
    })
  }

  render() {
    return(
      <p>test</p>
    );
  }

}


export default App;
