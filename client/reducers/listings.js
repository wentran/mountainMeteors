function listings(state = [], action) {
  switch(action.type) {
    case 'GETLISTINGS':
      console.log('listings reducer triggered. listings:', action);
      return Object.assign({}, state, action);

    default:
      return state;
  }
}

export default listings;
