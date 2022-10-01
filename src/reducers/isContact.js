const isContactReducer = (state = false, action) => {
  switch (action.type) {
    case 'CONTACT':
      return !state;
    default:
      return state;
  }
};

export default isContactReducer;
