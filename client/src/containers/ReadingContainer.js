import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as readingActions from '../../actions';
import PastCardShow from './components/PastCardShow';
import PresentCardShow from './components/PresentCardShow';
import FutureCardShow from './components/FutureCardShow';

class ReadingContainer extends React.Component {
  componentDidMount() {
    if (this.props.cards.length = = 0) {
      this.props.actions.fetchCards();
    }
  }

  render() {
    return (
      < FutureCardShow
          day={we need to give it a day!}
          student={we need to give it a student!}
          record={we need to give it a record!}/>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {cards: state.cards}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(readingActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ReadingContainer);
