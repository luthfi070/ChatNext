const title = (state = [], action) => {
  if (action.type == "TITLE") {
    return (state = [action.payload]);
  } else {
    return state;
  }
};

export default title;
