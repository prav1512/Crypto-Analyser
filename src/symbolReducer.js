// symbolReducer.js
const initialState = {
    symbol: "BICO", // Default symbol
  };
  
  const symbolReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_SYMBOL":
        return { ...state, symbol: action.payload };
      default:
        return state;
    }
  };
  
  export default symbolReducer;
  