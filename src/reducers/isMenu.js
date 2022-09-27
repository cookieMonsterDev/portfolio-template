const isMenuReducer = (state = false, action) => {
  switch (action.type) {
    case 'MENU':
      return !state;
    default: 
      return state
  }
};

export default isMenuReducer;
