export default function (state = [], action) {
  switch (action.type) {
    case "FETCH_COMMENTS_SUCCESS":
    
     return action.comments
    default:
     return state
  }
}
