import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cardActions from '../actions/actions';

class CardsContainer extends React.Component {

   render() {
      return (
        <div className="Cards">
         Cards Info
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
