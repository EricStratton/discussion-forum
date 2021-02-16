export default (state ={}, action) => {
  const { content, timeStamp, votes , id } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
      [id]: {
        content,
        timeStamp,
        votes,
        id
      }
    });
  case 'DELETE_POST':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
}