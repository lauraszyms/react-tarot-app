import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cardActions from '../actions/actions';
import PastCardShow from '../components/PastCardShow';
import PresentCardShow from '../components/PresentCardShow';
import FutureCardShow from '../components/FutureCardShow';

class CardsContainer extends React.Component {
  // componentDidMount() {
  //   if (this.props.cards.length === 0) {
  //     this.props.actions.fetchCards();
  //   }
  //
  // }


    render() {
      return (
        <div className="App">
        <header className="App-header">
          </header>
          <PastCardShow store={this.props.cards}/>
          <PresentCardShow store={this.props.cards}/>
          <FutureCardShow store={this.props.cards}/>
        </div>
      );
    }
  }

function mapStateToProps(state) {
  return {cards: state.cards}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(cardActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
