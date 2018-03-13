import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TarotBack from './components/TarotBack'
import PastCardShow from './components/PastCardShow';
import PresentCardShow from './components/PresentCardShow';
import FutureCardShow from './components/FutureCardShow';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
          <TarotBack/>
        </header>
        <PastCardShow store={this.props.store}/>
        <PresentCardShow store={this.props.store}/>
        <FutureCardShow store={this.props.store}/>
      </div>
    );
  }
}

export default App;
