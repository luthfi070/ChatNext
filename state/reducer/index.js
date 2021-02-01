import { combineReducers } from "redux";
import logged from "./isLogged";
import counter from "./counter";
import title from "./title";
import send from "./send";
import sendB from "./sendB";

const allReducer = combineReducers({
  myCount: counter,
  isLogged: logged,
  myTitle: title,
  senderA: send,
});

export default allReducer;
