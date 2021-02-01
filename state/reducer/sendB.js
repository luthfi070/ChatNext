const sendB = (state = [], action) => {
  if (action.type == "SENDB") {
    return (state = [...state, action.payload]);
  } else {
    return state;
  }
};

export default sendB;
