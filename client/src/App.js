import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TarotBack from './components/TarotBack'
import PastBox from './components/PastBox'
import PresentBox from './components/PresentBox'
import FutureBox from './components/FutureBox'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
          <TarotBack/>
        </header>
        <PastBox store={this.props.store}/>
        <PresentBox store={this.props.store}/>
        <FutureBox store={this.props.store}/>
      </div>
    );
  }
}

export default App;
