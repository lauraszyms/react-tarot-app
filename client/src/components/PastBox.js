import React, { Component } from 'react'

class PastBox extends Component {
// constructor() {
//    super();
//
//    this.state = {
//      boxContent: 'Past'
//    }
//  }
//
//  handleClick = () => {
//   this.setState({
//     boxContent: '<img src="https://i.imgur.com/zGlHRnf.jpg"/>'
//   })
// }

	render () {
   return <img src="https://i.imgur.com/zGlHRnf.jpg" className="Past-box" alt="tarotBack" onClick={() => { alert("Show Card Info") }}/>
	}
}

export default PastBox
