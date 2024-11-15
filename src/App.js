import React from "react";
import axios from "axios";
import './App.css';

class App extends React.Component{
  state = { advice: '' };

  componentDidMount(){
    this.fetchLesson();
  }
  
  fetchLesson = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      }) 
      .catch((error) => {
        console.log(error);
      });
  }

  render(){
    return(
      <div className="app">
        <div className="card">
          <h1> Life Lessons </h1>
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchLesson}>
            <span>Another One</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
