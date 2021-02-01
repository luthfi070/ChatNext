export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const changeText = (text) => {
  return {
    type: "TITLE",
    payload: text,
  };
};

export const sendMessage = (text, sender) => {
  return {
    type: "SEND",
    payload: text,
    sender: sender,
  };
};
