import React, { Component } from 'react'

class PastBox extends Component {
  constructor() {
    super();

    this.state = {
      cardLink: <img src="https://i.imgur.com/zGlHRnf.jpg" className="Past-box" alt="tarotBack" onClick={() => { alert("Show Card Info") }}/>
    }
  }

	render () {
	 return this.state.cardLink
  }
 }

export default PastBox
