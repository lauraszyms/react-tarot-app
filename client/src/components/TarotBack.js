import React from 'react';
import ReactDOM from 'react-dom';

export default class TarotBack extends React.Component {
  render() {
    return <img src="https://i.imgur.com/zGlHRnf.jpg" className="App-logo" alt="tarotBack" onClick={() => { alert("Shuffling!!") }}/>;
  }
 }
