import React, { Component } from 'react'

class FutureBox extends Component {
	// handleClick = () => { this.props.onClick(this.props.idea.id) }
  //
	// handleDelete = () => { this.props.onDelete(this.props.idea.id) }

	render () {
   return <img src="https://i.imgur.com/zGlHRnf.jpg" className="Future-box" alt="tarotBack" onClick={() => { alert("Show Card Info") }}/>
	}
}

export default FutureBox
