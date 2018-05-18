import React, { Component } from 'react'
import { fetchComments } from '../actions/actions';
import { connect } from 'react-redux';

class Comments extends Component {
  componentDidMount() {
      // this.props.fetchData('http://localhost:3001/cards');
      this.props.fetchComments();
  }

  render() {
    return (
      <div>
      <h1>Comments</h1>
      <ul>
        {this.props.comments.map(comment => <li>{comment.content}</li>)}
      </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: () => dispatch(fetchComments())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
