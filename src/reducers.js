const switchReducer = (state = { value: "Hello", display: "" }, action) => {
  switch (action.type) {
    case "HIT":
      return { ...state, display: action.id };

    default:
      return state;
  }
};

export default switchReducer;
