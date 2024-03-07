// store.js
import { createStore } from "redux";
import symbolReducer from "./symbolReducer";

const store = createStore(symbolReducer);

export default store;
