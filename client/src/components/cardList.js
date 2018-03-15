import React from 'react';

const CardList = ({cards}) => {
  function listCards() {
    return cards.map(card => {
      return (
        <div className="col-lg-12">
          <div className="col-lg-6 col-lg-offset-3 well">
            <img src={card.name} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}}/>
          </div>
        </div>
      )
    })
  }
  return (
    <div>
      {listCards()}
    </div>
  )
}

export default CardList;
