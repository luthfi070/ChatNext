const send = (state = [], action) => {
  if (action.type == "SEND") {
    return (state = [...state, { msg: action.payload, sender: action.sender }]);
  } else {
    return state;
  }
};

export default send;
