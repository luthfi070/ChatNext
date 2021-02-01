import "../styles/global.css";
import { createStore } from "redux";
import allReducer from "../state/reducer";
import { Provider } from "react-redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(allReducer, devToolsEnhancer());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
