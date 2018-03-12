import React, { Component } from 'react'

class PresentBox extends Component {
	// handleClick = () => { this.props.onClick(this.props.idea.id) }
  //
	// handleDelete = () => { this.props.onDelete(this.props.idea.id) }

	render () {
	 return <img src="https://i.imgur.com/zGlHRnf.jpg" className="Present-box" alt="tarotBack" onClick={() => { alert("Show Card Info") }}/>
  }
 }

export default PresentBox
