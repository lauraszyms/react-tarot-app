import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export default class TarotBack extends React.Component {

  render() {

    return <img src="https://i.imgur.com/zGlHRnf.jpg" className="App-logo" alt="tarotBack" onClick={() => { alert("Shuffling!!") }}/>;
  }
 }
