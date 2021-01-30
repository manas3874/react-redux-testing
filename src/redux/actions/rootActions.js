const increase = () => {
  return {
    type: "INCREASE",
  };
};
const decrease = () => {
  return {
    type: "DECREASE",
  };
};
const insert = (data) => {
  return {
    type: "INSERT",
    payload: data,
  };
};

const logIn = () => {
  return {
    type: "LOGIN",
  };
};

export { increase, decrease, insert, logIn };
