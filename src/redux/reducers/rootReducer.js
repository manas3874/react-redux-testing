const initState = {
  posts: [],
  counter: 0,
  loggedIn: true,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, counter: (state.counter += 1) };
    case "DECREASE":
      return { ...state, counter: (state.counter -= 1) };
    case "INSERT":
      return { ...state, posts: [...state.posts, action.payload.inputData] };
    case "LOGIN":
      return { ...state, loggedIn: state.loggedIn ? false : true };
    default:
      return state;
  }
};

export default rootReducer;
