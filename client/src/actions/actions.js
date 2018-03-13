export function addFutureCard(){
  return {
    type: "ADD_FUTURE_CARD",
    futureCardLink: futureCardLink: <img className="Future-box" src="https://i.imgur.com/bvdxin4.jpg"/>
  }
}


export function addPresentCard(){
  return {
    type: "ADD_PRESENT_CARD",
    presentCardLink: <img className="Present-box" src="https://i.imgur.com/bvdxin4.jpg"/>
  }
}



export function addPastCard(){
  return {
    type: "ADD_PAST_CARD",
    pastCardLink: <img className="Past-box" src="https://i.imgur.com/bvdxin4.jpg"/>
  }
}
