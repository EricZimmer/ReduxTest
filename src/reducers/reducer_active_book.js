// State argument is NOT application state, only the state this reducer is responsible for
export default function(state = null, action) { 
  //if state is undefined, initialize as null
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}