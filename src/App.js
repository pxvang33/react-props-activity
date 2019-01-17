import React, { Component } from 'react';
import Header from './components/Header.js';
import EnterNumber from './components/EnterNumber.js';
import CurrentTotal from './components/CurrentTotal.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      // history: [], will need eventually

    } // end this.state
  } // end constructor
  addCount = (math) => {
    console.log('in count', this.state.count);
    this.setState({
      count: this.state.count + parseInt(math),
    })
  } // end addCount
  minusCount = (math) => {
    console.log('in count', this.state.count);
    this.setState({
      count: this.state.count - parseInt(math),
    })
  } // end minusCount

  // updateTotal = (currentTotal) => {

  // }
  render() {
    return (
      <div className="App">
        <Header />
        <p> Enter a number and click up or down. The total will increase or decrease by that amount.</p>
        <EnterNumber addCount={this.addCount} minusCount={this.minusCount}/>
        <CurrentTotal count={this.state.count} addCount={this.addCount} minusCount={this.minusCount}/>
      </div>
    );
  }
}

export default App;
